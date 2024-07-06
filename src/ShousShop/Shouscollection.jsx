import { Button } from "@mui/material";

function Shouscollection({cardData}) {
    console.log(cardData)
    return ( 
        <>
        
        <div className="card">
  <img src={cardData.image} className="card-img-top" alt="..."/>
  <div className="card-body">
  <h5 className="card-title"> price:-{cardData.price} </h5>
    <h5 className="card-title">title:- {cardData.title} </h5>
    <p className="card-text">category:- {cardData.category}</p>
    <h5 className="card-title"> rating :- {cardData.rating.rate} </h5>
    <Button style={{marginTop:"20px",width:"auto"}} variant="contained" color="">Add To Card</Button>
    <Button style={{marginTop:"20px",width:"120px"}} variant="contained" color="success">Submit</Button>
  
  </div>
</div>
        </>
     );
}

export default Shouscollection;