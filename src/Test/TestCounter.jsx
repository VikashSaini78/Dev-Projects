import React, { useState } from 'react'

function TestCounter() {
   const [value,setvalue]=useState(0)
  

   function increment(){
    setvalue(value+1)
   }

   function decremenet(){
    setvalue(value-1)
   }
  return (
    <>
      <h1>Counter</h1>
      <button onClick={increment}>+</button>
      <p>{value}</p>
      <button onClick={decremenet}>-</button>
    </>
  )
}

export default TestCounter
