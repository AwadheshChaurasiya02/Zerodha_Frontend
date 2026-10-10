export default function Hero() {
  return (
    <div className="container-fluid text-white color-white" style={{backgroundColor:"#387ED1"}}>
    <div className="container">
        <div className="row px-5">

          <div className="col-7 p-5">
            <h1 className="mb-5 fs-5">Suppport Portal</h1>
            <h2 className="fs-4 lh-base">Search for an answer or browse help topics to create a ticket</h2>
            <input className="w-100 p-4 my-3 bg-light outline-none"type="text" placeholder="Eg. how do i activate F&O why is my order getting rejected."></input><br/>
            <a href="#" className="fs-7">Track account opening</a> <a href="#" className="m-4">Track segement activation</a> <a href="#">Intraday margins</a> <a href="#" className="m-4">Kite user manual</a>
          </div>

          <div className="col-5 p-5">
            <p className="mb-5 fs-6 text-end"><a href="#">Track Tickets</a></p>
            <h2 className="fs-4 lh-base" >Featured</h2>
            <ol>
              <li className="fs-6 mb-3"><a href="#">Current Takeovers and Delisting - January 2024</a></li>
              <li><a href="#">Latest Intraday Leverages - MIS & CO</a></li>
            </ol>
          </div>

        </div>
      </div>
      </div>
  );
};