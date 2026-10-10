import pricing0 from "../../assets/pricing0.svg";
import intradayTrades from "../../assets/intradayTrades.svg";

export default function Hero() {
  return (
    <div className="container">
      <div className="row text-center p-5 border-bottom mb-3">
        <h1 className="fs-3 mb-3">Pricing</h1>
        <p className="text-muted fs-6">Free equity investments and flat ₹20 traday  and F&O trades</p>
      </div>

      <div className="row">

        <div className="col p-5 text-center">
          <img src={pricing0} style={{width:"95%"}}></img>
          <h2 className="fs-4">Free equity delivery</h2>
          <p className="text-muted">All equity delivery investments (NSE,BSE),<br/> are absolutly free - ₹0 brokerage</p>
        </div>

        <div className="col py-5 px-4 text-center">
          <img src={intradayTrades} style={{width:"95%"}}></img>
          <h2 className="fs-4">Intraday and F&O trades</h2>
          <p className="text-muted">Flat Rs. 20 or 0.03% (whichever is lower)<br/> per excuted order on intraday trades <br/> across equity. currency, and commodity</p>
        </div>

        <div className="col p-5 text-center">
          <img src={pricing0} style={{width:"95%"}}></img>
          <h2 className="fs-4">Free direct MF</h2>
          <p className="text-muted"> All direct mutual fund investments are absolutely free — ₹ 0
            commissions & DP charges.</p>
        </div>

      </div>
    </div>
  );
};