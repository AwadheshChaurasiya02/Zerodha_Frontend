import { Link } from "react-router-dom";

export default function NotFound(){
    return(
        <div className="container p-5 my-3">
            <div className="row text-center">
            <h1 className="mt-5">404 Not Found</h1>
            <p>Sorry, the page you are looking for does not exits.</p>
            <Link to="/"><button className="p-1 btn btn-primary mb-5" style={{width:"20%",margin:"auto"}}>Go Home</button></Link>
            </div>
        </div>
    );
}