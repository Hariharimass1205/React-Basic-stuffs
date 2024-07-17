

import React, { useEffect, useState } from 'react'


function App() {
const [count,setCount] = useState(0)
  
 useEffect(()=>{
  const timer = setInterval(() => {
     setCount((c)=>c+1)
  }, 100);
  console.log(count)
 
  return()=>{
    clearInterval(timer)
   }
 },[])
   
 if(count==200){
  clearInterval(timer)
}
  return (
    <>
    <h1>count : {count}</h1>
    </>
  )
}

export default App
