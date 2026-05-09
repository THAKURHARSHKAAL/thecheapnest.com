import { useMemo, useState } from "react";
import { AlertTriangle, BarChart3, Bot, CandlestickChart, ShieldAlert } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const coins = ["ETHUSDT", "ZECUSDT", "BTCUSDT", "SOLUSDT"];

const Bot = () => {
  const [symbol, setSymbol] = useState("ETHUSDT");
  const [fundUsage, setFundUsage] = useState(80);
  const [leverage, setLeverage] = useState(25);
  const [stopLoss, setStopLoss] = useState(10);
  const [takeProfit, setTakeProfit] = useState(30);
  const [volumeSpike, setVolumeSpike] = useState(2.1);

  const riskLevel = useMemo(() => {
    const score = leverage * (fundUsage / 100) + stopLoss;
    if (score > 50) return "Extreme";
    if (score > 25) return "High";
    return "Moderate";
  }, [fundUsage, leverage, stopLoss]);

  return (
    <main className="min-h-screen bg-slate-950 px-4 py-8 text-slate-100 md:px-8">
      <div className="mx-auto grid w-full max-w-7xl gap-6 lg:grid-cols-2">
        <Card className="border-slate-800 bg-slate-900/80">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-2xl">
              <Bot className="h-6 w-6 text-cyan-400" />
              CoinDCX Real-Time Strategy Builder
            </CardTitle>
            <CardDescription>
              5m candle strategy template with momentum + volume analysis. Enter your values and wire your CoinDCX API keys in a backend service.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <Label>Pair</Label>
                <select
                  value={symbol}
                  onChange={(event) => setSymbol(event.target.value)}
                  className="mt-1 w-full rounded-md border border-slate-700 bg-slate-950 px-3 py-2"
                >
                  {coins.map((coin) => (
                    <option key={coin} value={coin}>{coin}</option>
                  ))}
                </select>
              </div>
              <div>
                <Label>Fund Usage (%)</Label>
                <Input type="number" value={fundUsage} onChange={(event) => setFundUsage(Number(event.target.value))} />
              </div>
              <div>
                <Label>Leverage (x)</Label>
                <Input type="number" value={leverage} onChange={(event) => setLeverage(Number(event.target.value))} />
              </div>
              <div>
                <Label>Volume Spike Threshold</Label>
                <Input type="number" step="0.1" value={volumeSpike} onChange={(event) => setVolumeSpike(Number(event.target.value))} />
              </div>
              <div>
                <Label>Stop Loss (%)</Label>
                <Input type="number" value={stopLoss} onChange={(event) => setStopLoss(Number(event.target.value))} />
              </div>
              <div>
                <Label>Take Profit (%)</Label>
                <Input type="number" value={takeProfit} onChange={(event) => setTakeProfit(Number(event.target.value))} />
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-3">
              <Badge variant="secondary">Timeframe: 5m</Badge>
              <Badge variant="secondary">Pair: {symbol}</Badge>
              <Badge className={riskLevel === "Extreme" ? "bg-red-600" : riskLevel === "High" ? "bg-amber-600" : "bg-emerald-600"}>
                Risk: {riskLevel}
              </Badge>
            </div>

            <div className="rounded-lg border border-red-500/40 bg-red-950/30 p-3 text-sm">
              <p className="flex items-start gap-2"><ShieldAlert className="mt-0.5 h-4 w-4 text-red-400" />Using 80% capital with very high leverage can liquidate your account quickly. Start in paper trading mode.</p>
            </div>

            <Button className="w-full">Generate Strategy JSON + Execution Plan</Button>

            <div className="rounded-lg border border-slate-700 bg-slate-950/70 p-3 text-xs text-slate-300">
              Backend API: <code className="text-cyan-300">POST /strategy/signal</code> and <code className="text-cyan-300">POST /orders/execute</code> (Python FastAPI in <code className="text-cyan-300">/backend</code>).
            </div>

          </CardContent>
        </Card>

        <Card className="border-slate-800 bg-slate-900/80">
          <CardHeader>
            <CardTitle className="flex items-center gap-2"><CandlestickChart className="h-5 w-5 text-cyan-400" />3D Bot Process View</CardTitle>
            <CardDescription>Data stream → Indicators → Signal Engine → Risk Check → Order Placement</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="relative mx-auto h-72 w-full overflow-hidden rounded-xl border border-slate-700 bg-gradient-to-br from-slate-900 to-slate-800 [perspective:900px]">
              <div className="absolute left-4 top-8 rounded-lg border border-cyan-400/60 bg-cyan-500/10 px-3 py-2 shadow-lg shadow-cyan-500/20 [transform:rotateY(18deg)]">Market Feed</div>
              <div className="absolute left-24 top-24 rounded-lg border border-violet-400/60 bg-violet-500/10 px-3 py-2 shadow-lg shadow-violet-500/20 [transform:rotateY(-14deg)]">TA Engine</div>
              <div className="absolute left-1/2 top-12 -translate-x-1/2 rounded-lg border border-emerald-400/60 bg-emerald-500/10 px-3 py-2 shadow-lg shadow-emerald-500/20 [transform:translateZ(20px)]">Signal Logic</div>
              <div className="absolute right-20 top-24 rounded-lg border border-amber-400/60 bg-amber-500/10 px-3 py-2 shadow-lg shadow-amber-500/20 [transform:rotateY(14deg)]">Risk Model</div>
              <div className="absolute right-4 top-8 rounded-lg border border-red-400/60 bg-red-500/10 px-3 py-2 shadow-lg shadow-red-500/20 [transform:rotateY(-18deg)]">CoinDCX Orders</div>
            </div>

            <div className="mt-5 grid grid-cols-2 gap-3 text-sm">
              <div className="rounded-md bg-slate-800 p-3"><BarChart3 className="mb-1 h-4 w-4 text-cyan-400" />Volume spike trigger: {volumeSpike}x avg volume</div>
              <div className="rounded-md bg-slate-800 p-3"><AlertTriangle className="mb-1 h-4 w-4 text-amber-400" />Auto exit: -{stopLoss}% / +{takeProfit}%</div>
            </div>
          </CardContent>
        </Card>
      </div>
    </main>
  );
};

export default Bot;
