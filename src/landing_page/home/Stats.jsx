import ecosystem from "../../assets/ecosystem.png";

export default function Stats(){
    return(
        <div className="container p-3 my-4">
            <div className="row p-4">
                <div className="col-6 p-5 d-flex flex-column justify-content-center">
                    <h1 className="mb-5">Trust with confidence</h1>
                    <h2>Customer-first always</h2>
                    <p className="mb-4 text-muted">That's why 1.3+ crore customers trust Zerodha with ₹3.5+ lakh crores worth of equity investments.</p>

                    <h2>No span or gimmicks</h2>
                    <p className="mb-4 text-muted">No gimmicks, span, "gamification", or annoying push notifications. High quality apps that you use at you pace, the way you like.</p>

                    <h2>The Zerodha universe</h2>
                    <p className="mb-4 text-muted">Not just an app, but a whole ecosystem. Our investments in 30+ finitech startups offer you tailored services specific to your needs.</p>

                    <h2>Do better with money</h2>
                    <p className="mb-4 text-muted">With initatives like Nudge and Kill Switch, we don't just facilitate transactions, but actively help you do better with you money.</p>
                </div>
                <div className="col-6 p-5">
                    <img src={ecosystem} alt="ecosystem" className="img-fluid mb-2"></img>
                    <a href="#" className="mx-5" style={{textDecoration:"none"}}>Explore our products <i className="fa-solid fa-arrow-right-long"></i></a>
                    <a href="#" style={{textDecoration:"none"}}>Try Kite demo <i className="fa-solid fa-arrow-right-long"></i></a>
                </div>
            </div>
        </div>
    );
}