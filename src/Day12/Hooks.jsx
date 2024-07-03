import { useReducer } from "react";

function Hooks() {

   let initialstate = (0)
   function reducer( cruntstate,action){
    switch(action){
        case "inrement":
        return cruntstate+1

       
            case"decrement":
            return cruntstate-1

            default:
                return cruntstate
    }

   }

    const[state,usestate]=useReducer(reducer,initialstate)



    return (  
        <>
            <div style={{
                width:"400px",
                height:"auto",
                margin:"auto",
             
            }} 
           
          
            >
            <h1 className="text-center">Hooks usereduser</h1>
            <div style={{ textAlign:"center",backgroundColor:"white"}}>
            <button style={{
                width:"80px",
                height:"30px",
                outline:"none",
                border:"none",
                backgroundColor:"tomato",
                marginTop:"20px",

            }}
            onClick={()=>{usestate("inrement")}}
            >+</button> <br/> 
            <h5>{state} </h5>
            <button style={{
                width:"80px",
                height:"30px",
                outline:"none",
                border:"none",
                backgroundColor:"tomato",
                marginBottom:"20px"

            }}
                onClick={()=>{usestate("decrement")}}
                >-</button>

            </div>

            </div>

        </>
    );
}

export default Hooks;