import googlePlayimg from "../../assets/googlePlayBadge.svg";
import appStoreimg from "../../assets/appStoreBadge.svg";


export default function LeftImageSection({imageUrl,productName,productDescription,tryDemo,learnMore,googlePlay,appStore}) {
  return (
    <div className="container">
      <div className="row p-5">
        <div className="col-6 p-5">
          <img src={imageUrl} alt="leftImage" style={{width:"100%"}}></img>
        </div>
        <div className="col-6 p-5">
          <h1>{productName}</h1>
          <p style={{lineHeight:"1.7"}}>{productDescription}</p>

          <div className="mb-3">
            <a href={tryDemo} style={{textDecoration:"none", marginRight:"30px",fontSize:"14px"}}>Try Demo <i className="fa-solid fa-arrow-right-long"></i></a>
            <a href={learnMore} style={{textDecoration:"none",fontSize:"14px"}}>Learn More <i className="fa-solid fa-arrow-right-long"></i></a>
          </div>
          
          <div>
            <a href={googlePlay} style={{marginRight:"10px"}}><img src={googlePlayimg}></img></a>
            <a href={appStore}><img src={appStoreimg}></img></a>
          </div>
          
        </div>
      </div>
    </div>
  );
};