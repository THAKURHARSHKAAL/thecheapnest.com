# Trading Bot Backend (Python)

## Quick start
```bash
cd backend
python -m venv .venv
source .venv/bin/activate
pip install -r requirements.txt
cp .env.example .env
uvicorn app:app --reload --port 8000
```

## Endpoints
- `GET /health`
- `POST /strategy/signal` : send at least 50 candles of 5m data
- `POST /strategy/advanced-module` : same signal strategy with advanced risk metrics and 3D graph node output
- `POST /orders/execute` : dry-run by default, live order only when `DRY_RUN=false`

## Security notes
- Keep API key/secret only in backend `.env`, never frontend.
- Default risk policy blocks leverage above `MAX_LEVERAGE` and funds usage above 80%.
