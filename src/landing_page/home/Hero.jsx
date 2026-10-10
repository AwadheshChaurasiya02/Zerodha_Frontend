import homeHero from "../../assets/homeHero.png";
import {Link} from "react-router-dom";

export default function Hero(){
    return(
        <div className="container p-5">
            <div className="row text-center">
                    <img src={homeHero} alt="Hero Image" className="img-fluid"></img>
                    <h1 className="mt-5">Invest in everything</h1>
                    <p>Online plateform to invest in stocks, derivatives, mutual funds, and more</p>
                    <Link to="/signup"><button className="p-1 btn btn-primary mb-5" style={{width:"20%",margin:"auto"}}>Signup Now</button></Link>
            </div>
        </div>
    );
}