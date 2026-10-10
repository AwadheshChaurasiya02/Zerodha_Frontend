import largestBroker from "../../assets/largestBroker.svg";
import pressLogos from "../../assets/pressLogos.png";

export default function Awards(){
    return(
        <div className="container mt-4">
            <div className="row">
                <div className="col-6 p-5">
                    <img src={largestBroker} alt="largestBroker" className="img-fluid"></img>
                </div>
                <div className="col-6 p-5 d-flex flex-column justify-content-center">
                    <h1>Largest stock broker in india</h1>
                    <p className="mb-5">2+ million Zerodha clients contribute to over 15% of all retail order volumes in india daily by trading and investing in :</p>
                    <div className="row">
                        <div className="col-6">
                            <ul className="d-grid gap-3">
                                <li>Future and options</li>
                                <li>Commodity derivatives</li>
                                <li>Currency derivatives</li>
                            </ul>
                        </div>

                        <div className="col-6">
                            <ul className="d-grid gap-3">
                                <li>Stocks & IPOs</li>
                                <li>Direct mutual funds</li>
                                <li>Bonds and grow</li>
                            </ul>
                        </div>
                    </div>
                    <img src={pressLogos} alt="pressLogos" className="img-fluid"></img>
                </div>
            </div>
        </div>
    );
}