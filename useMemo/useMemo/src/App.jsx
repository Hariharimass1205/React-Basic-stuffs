import React, { useEffect, useMemo, useState } from 'react'

function App() {
  const [number,setNumber] = useState(0)
  const [dark,setDark] = useState(false)

   //UseMemo is used to memories the value
   // of the variable give in the array
  const DoubleNumber =  useMemo(()=>{
    return slow(number)
  },[number])

  let theme = useMemo(()=>{
  return {
      backgroundColor:dark? "black" : "white",
      color : dark? "white" : "black"
    }
  },[dark])

  useEffect(()=>{
    console.log("theme has been changed")
  },[theme])


  return (
    <>
    <input 
     type="number" 
     value={number}
     onChange={(e)=>setNumber(e.target.value)}
     />
    <h1 style={theme}>{DoubleNumber}</h1>
    <button onClick={()=>setDark((curr)=>!curr)}>Toggle theam</button>
    </>
  )
}

export default App

    function slow(num){
    for (let i = 0; i <1000000000; i++) {}
    return num * 2
    }