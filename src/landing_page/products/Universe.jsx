import smallcase from "../../assets/smallcaseLogo.png";
import streak from "../../assets/streakLogo.png";
import sensibull from "../../assets/sensibullLogo.svg";
import zerodhaFundhouse from "../../assets/zerodhaFundhouse.png";
import goldenpi from "../../assets/goldenpiLogo.png";
import ditto from "../../assets/dittoLogo.png";
import {Link} from "react-router-dom";


export default function Universe() {
  return (
    <div className="container mb-3">

      <div className="row text-center mt-5">
        <h1 className="mb-4 fs-2">The Zerodha Universe</h1>
        <p>Extend your trading and investment experience even further with our partner platforms</p>
      </div>

      <div className="row text-center mt-3">
        <div className="col p-4">
          <img src={smallcase} style={{width:"60%"}}></img>
          <p className="mt-3 universeFont">Thematic investment platform</p>
        </div>

        <div className="col p-4">
          <img src={streak} style={{width:"42%"}}></img>
          <p className="mt-3 universeFont">Algo & strategy platform</p>
        </div>

        <div className="col p-4">
          <img src={sensibull} style={{width:"51%"}}></img>
          <p className="mt-3 universeFont">Options trading platform</p>
        </div>
      </div>

      <div className="row text-center  mb-3">
        <div className="col p-4">
          <img src={zerodhaFundhouse} style={{width:"55%"}}></img>
          <p className="mt-3 universeFont">Asset management</p>
        </div>

        <div className="col p-4">
          <img src={goldenpi} style={{width:"50%"}}></img>
          <p className="mt-3 universeFont">Bonds trading platform</p>
        </div>

        <div className="col p-4">
          <img src={ditto} style={{width:"30%"}}></img>
          <p className="mt-3 universeFont">Insurance</p>
        </div>
      </div>

        <div className="row d-flex justify-content-center">
            <Link to="/signup" style={{width:"20%"}}><button className="px-5 btn btn-primary mb-5">Signup Now</button></Link>
        </div>
      
      
    </div>
  );
};