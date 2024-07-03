import { useState } from "react";

function Hooks2() {
 const[count,setcount] = useState(0)
 const[name,setname] = useState("vicky")




     const deveiderfn = Usememo(
     function devide(){
     console.log("i an a deveider  function")
     return count/2
     
 },[]
 )
    return ( 
        <>
            <h1>{deveiderfn}</h1>

            
           

            <button onClick={()=>{
                setcount(count+1)
            }}>increment</button>
              <h1>{count}</h1>
            <button onClick={()=>{
                setcount(count-1)
            }}>Decrement</button>

             <h1>{name} </h1>

            <button onClick={()=>{
                setname("jaitpuriya")
            }}>Update</button>


        </>
     );
}

export default Hooks2;