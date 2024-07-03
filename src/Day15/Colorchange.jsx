import { useState } from "react";
import "./Colorchange.css"
function Colorchhange() {

  const[color,setcolor] = useState('')


  function hendalvalue(valuerep){
  console.log(valuerep)
  }


    return ( 
        <>
           
         <div className="color-picker" style={{backgroundColor:color}}>
         <div className="color-btn">
            <button className="btn1" onClick={()=> setcolor("red")} >Red</button>
            <button className="btn2" onClick={()=> setcolor("yellow")}>yellow</button>
            <button className="btn3" onClick={()=> setcolor("green")}>Green</button>
            <button className="btn4" onClick={()=> setcolor("pink")}>pink</button>
            <button className="btn5"onClick={()=> setcolor("skyblue")}>skyblue</button> 
           
         </div>

         </div>
      
        </>

     );
}

export default Colorchhange;

