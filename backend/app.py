import hashlib
import hmac
import json
import os
import time
from typing import Literal

import httpx
from dotenv import load_dotenv
from fastapi import FastAPI, HTTPException
from pydantic import BaseModel, Field

load_dotenv()

API_KEY = os.getenv("COINDCX_API_KEY", "")
API_SECRET = os.getenv("COINDCX_API_SECRET", "")
BASE_URL = os.getenv("COINDCX_BASE_URL", "https://api.coindcx.com").rstrip("/")
DRY_RUN = os.getenv("DRY_RUN", "true").lower() == "true"
MAX_LEVERAGE = int(os.getenv("MAX_LEVERAGE", "25"))

app = FastAPI(title="CoinDCX Trading Bot Backend", version="0.1.0")


class Candle(BaseModel):
    open: float
    high: float
    low: float
    close: float
    volume: float


class SignalRequest(BaseModel):
    symbol: str = Field(examples=["ETHUSDT"])
    candles: list[Candle] = Field(min_length=50)
    volume_spike_threshold: float = 2.0


class ExecuteOrderRequest(BaseModel):
    symbol: str
    side: Literal["buy", "sell"]
    order_type: Literal["market", "limit"] = "market"
    quantity: float = Field(gt=0)
    price: float | None = None
    leverage: int = Field(default=5, ge=1)
    use_funds_percent: float = Field(default=10, gt=0, le=100)
    stop_loss_percent: float = Field(default=2, gt=0)
    take_profit_percent: float = Field(default=4, gt=0)


def ema(values: list[float], period: int) -> float:
    k = 2 / (period + 1)
    out = values[0]
    for v in values[1:]:
        out = v * k + out * (1 - k)
    return out


def build_signal(payload: SignalRequest) -> dict:
    closes = [c.close for c in payload.candles]
    vols = [c.volume for c in payload.candles]

    ema_9 = ema(closes[-30:], 9)
    ema_21 = ema(closes[-30:], 21)
    momentum = (closes[-1] - closes[-6]) / closes[-6] * 100
    avg_volume = sum(vols[-21:-1]) / 20
    volume_ratio = vols[-1] / avg_volume if avg_volume else 0

    direction = "long" if ema_9 > ema_21 and momentum > 0 and volume_ratio >= payload.volume_spike_threshold else "short" if ema_9 < ema_21 and momentum < 0 and volume_ratio >= payload.volume_spike_threshold else "flat"

    confidence = min(99, max(1, abs(momentum) * 4 + max(0, (volume_ratio - 1) * 20)))

    return {
        "symbol": payload.symbol,
        "signal": direction,
        "confidence": round(confidence, 2),
        "indicators": {
            "ema_9": round(ema_9, 4),
            "ema_21": round(ema_21, 4),
            "momentum_pct_5m": round(momentum, 4),
            "volume_ratio": round(volume_ratio, 4),
        },
    }


def sign_payload(payload: dict) -> tuple[str, str]:
    body = json.dumps(payload, separators=(",", ":"))
    signature = hmac.new(API_SECRET.encode(), body.encode(), hashlib.sha256).hexdigest()
    return body, signature


@app.get("/health")
def health() -> dict:
    return {"status": "ok", "dry_run": DRY_RUN, "max_leverage": MAX_LEVERAGE}


@app.post("/strategy/signal")
def strategy_signal(payload: SignalRequest) -> dict:
    return build_signal(payload)


@app.post("/orders/execute")
async def execute_order(payload: ExecuteOrderRequest) -> dict:
    if payload.leverage > MAX_LEVERAGE:
        raise HTTPException(status_code=400, detail=f"Leverage too high. Max allowed is {MAX_LEVERAGE}x")
    if payload.use_funds_percent > 80:
        raise HTTPException(status_code=400, detail="Funds usage above 80% is blocked by risk policy")

    order = {
        "symbol": payload.symbol,
        "side": payload.side,
        "order_type": payload.order_type,
        "quantity": payload.quantity,
        "price": payload.price,
        "timestamp": int(time.time() * 1000),
    }

    if DRY_RUN:
        return {"mode": "dry_run", "order": order, "risk": {"leverage": payload.leverage, "sl": payload.stop_loss_percent, "tp": payload.take_profit_percent}}

    if not API_KEY or not API_SECRET:
        raise HTTPException(status_code=500, detail="Missing CoinDCX API credentials")

    body, signature = sign_payload(order)
    headers = {
        "Content-Type": "application/json",
        "X-AUTH-APIKEY": API_KEY,
        "X-AUTH-SIGNATURE": signature,
    }

    async with httpx.AsyncClient(timeout=15) as client:
        resp = await client.post(f"{BASE_URL}/exchange/v1/orders/create", data=body, headers=headers)

    if resp.status_code >= 400:
        raise HTTPException(status_code=resp.status_code, detail=resp.text)

    return {"mode": "live", "response": resp.json()}
