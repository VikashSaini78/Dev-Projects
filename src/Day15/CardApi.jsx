import { useEffect, useState } from "react";
import "./CardApi.css"

function CardApi() {

    const[count,setcount] = useState(1)
  const[title,settitle] = useState('')
  const[image,setimage] = useState('')
  const[category,setcategory] = useState('')
  const[price,setprice] = useState('')
  const[rating,setrating] = useState('')

   async function mydata(){
    let result = await fetch(`https://dummyjson.com/products/${count}`)
    let data = await result.json()
    console.log(data);
    settitle(data.title)
    setimage(data.images[0])
    setcategory(data.category)
    setprice(data.price)
    setrating(data.rating)
}


useEffect(()=>{
    mydata()
})


function hendalvalue(){
    setcount(count+1)
}

   


    return ( 
        <>
        <h1 id="h1"> Count value :- {count}</h1>
           <div className="container1">
            <div className="card">
  <img src={image} className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title"> Title:-{title} </h5>
    <p className="card-text"> Category :- {category} </p>
    <h5 className="card-title"> price :- {price} </h5>
    <h5 className="card-title"> Rating :- {rating} </h5>
    <a href="#" className="btn btn-primary" onClick={hendalvalue}>Go somewhere</a>
</div>

            </div>
           </div>
        </>
     );
}

export default CardApi;