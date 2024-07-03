import { useEffect, useState } from "react"
import Shousapihom from "./Shousapihom"

function HomeApi() {
    
   const [value,setValue] = useState([])


   useEffect(()=>{
       fetch('https://fakestoreapi.com/products/').then((data)=>{
       return data.json()
   }).then((result)=>{
       console.log(result)
       setValue(result)
   })
   },[])
    return ( 
        <>
            <Shousapihom productData ={value}/>
        </>
     );
}

export default HomeApi;