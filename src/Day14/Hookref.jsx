import { useEffect, useRef, useState } from "react";

function Hookref() {
 const[name,setname] = useState("Saini")
const[value,setvalue] = useState()

  let count= useRef('')
   const usedom = useRef("11")
   console.log(usedom)

  let usecount = useRef(0)
  console.log(usecount)

   function hendalclear(){
    setname(" ")
    usedom.current.focus()

   }
 

   function chngecolor(){
    usedom.current.style.backgroundColor="red"
   }

   useEffect(()=>{
    if(usecount.current){
        usecount.current=usecount.current+1
    }
   else{
    usecount.current=usecount.current-1
   }
   })

    return ( 
        <>
            <h1 className="text-white text-center font-bold text-5xl mb-10">Useref Hook</h1>
            <div className="  w-1/2 flex justify-center m-auto">
            <input className="m-auto outline-none p-2 rounded-sm border-2" type="text" value={name} ref={usedom}/>
            <button className="w-36 bg-slate-50 rounded-lg ml-1" onClick={hendalclear}>Clear value</button>
            <button className="w-36 bg-slate-50 rounded-lg ml-1" onClick={chngecolor}>Color Change</button>
            <input className="p-2 border-2 outline-none rounded-sm ml-2 " type="" value={value} onChange={(e)=>{setvalue(e.target.value)}}/>
            <h1 className="bg-lime-500">{usecount.current}</h1>
            </div>
        </>
     );
}

export default Hookref;