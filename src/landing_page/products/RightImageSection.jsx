export default function RightImageSection({productName,productDescription,learnMore,imageUrl}) {
  return (
    <div className="container">
      <div className="row">
        <div className="col-6 p-5">
          <h1>{productName}</h1>
          <p>{productDescription}</p>
          <a href={learnMore} style={{textDecoration:"none",fontSize:"14px"}}>Learn More <i className="fa-solid fa-arrow-right-long"></i></a>
        </div>
        <div className="col-6">
          <img src={imageUrl} style={{width:"100%"}}></img>
        </div>
      </div>
    </div>
  );
};