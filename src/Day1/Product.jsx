import "./Product.css"
function Product(props) {
   
    return ( 
        <>

        {/* <div className="container">
        <div className="row">
        <div className="col-md-3">
        <h2>productname :- {props.pname} </h2>
           <h3>price :-{props.price} </h3> 
           <p>Rating :-{props.rating} </p>  
           <h5>Id :-{props.id} </h5>
</div>


<div className="col-md-3">
       2 
</div>


<div className="col-md-3">
   3
</div>


<div className="col-md-3">
   4
</div>

</div>
  </div> */}


          <div className="cardpropes">
          <h2>productname :- {props.pname} </h2>
           <h3>price :-{props.price} </h3> 
           <p>Rating :-{props.rating} </p>  
           <h5>Id :-{props.id} </h5> 
          </div>       
          
           </>
     );
}

export default Product;