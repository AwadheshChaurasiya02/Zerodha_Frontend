import founder from "../../assets/nithinKamath.jpg";

export default function Team() {
  return (
    <div className="container">
      <div className="row pt-5">
        <h1 className="text-center">People</h1>
      </div>
      
      <div className="row text-muted p-3 aboutText" style={{ lineHeight: "1.8", fontSize: "1.2em" }}>
        <div className="col-6 p-5 text-center">
          <img src={founder} alt="founder" style={{borderRadius:"100%", width:"60%", marginBottom:"1rem"}}></img>
          <h4 className="fs-4">Nithin Kamath</h4>
          <h5 className="fs-6">Founder, CEO</h5>
          </div>

        <div className="col-6 p-5">
            <p>
            Nithin bootstrapped and founded Zerodha in 2010 to overcome the
            hurdles he faced during his decade long stint as a trader. Today,
            Zerodha has changed the landscape of the Indian broking industry.
          </p>
          <p>
            He is a member of the SEBI Secondary Market Advisory Committee
            (SMAC) and the Market Data Advisory Committee (MDAC).
          </p>
          <p>Playing basketball is his zen.</p>
          <p className="underline-none">
            Connect on <a href="">Homepage</a> / <a href="">TradingQnA</a> /{" "}
            <a href="">Twitter</a>
          </p>
        </div>
      </div>
    </div>
  );
};