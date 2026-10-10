

export default function Pricing(){
    return(
        <div className="container mt-5">
            <div className="row">
                <div className="col-4">
                    <h1 className="mb-4">Unbeatable pricing</h1>
                    <p>We poineered the concept of discount broking and price transparency in India. Flat fees and no hidden charges.</p>
                    <a href="#" style={{textDecoration:"none"}}>See pricing <i className="fa-solid fa-arrow-right-long"></i></a>
                </div>
                <div className="col-2"></div>
                <div className="col-6">
                    <div className="row text-center">
                        <div className="col-6 border p-3">
                            <h1 className="mb-4">₹0</h1>
                            <p>Free equity delivery and <br></br>direct mutual funds</p>
                        </div>
                        <div className="col-6 border p-3">
                            <h1 className="mb-4">₹20</h1>
                            <p>Intraday and F&O</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}