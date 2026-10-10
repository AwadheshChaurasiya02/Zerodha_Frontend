import education from "../../assets/education.svg"

export default function Education(){
    return(
        <div className="container mt-5">
            <div className="row">
                <div className="col-6 p-5">
                    <img src={education} alt="" style={{width:"75%"}}></img>
                </div>
                <div className="col-6 p-5">
                    <h1 className="mb-3">Free and open market education</h1>
                    <p>Verify, the largest online stocks market education book in the world covering everything from the basics to advanced trading.</p>
                    <a href="#" style={{textDecoration:"none"}}>Versity <i className="fa-solid fa-arrow-right-long"></i></a>
                    <p className="mt-5">Trading Q&A, the most active trading and investment community in India for all your market related quires.</p>
                    <a href="#" style={{textDecoration:"none"}}>Trading Q&A <i className="fa-solid fa-arrow-right-long"></i></a>
                </div>
            </div>
        </div>
    );
}