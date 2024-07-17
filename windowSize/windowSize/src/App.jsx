import React, { useEffect, useState } from 'react'

function App() {
  const [width,setWidth] = useState(window.innerWidth)
  const [height,setHeight] = useState(window.innerHeight)

  useEffect(()=>{
    window.addEventListener("resize",handleSze)

    return()=>{
      // We cleaning the function once its done
      window.removeEventListener("resize",handleSze)
    }
  },[height,width])
  
  function handleSze(){
    setWidth(window.innerWidth)
    setHeight(window.innerHeight)
  }


  return (
    <div>
      <p>Every time the dependencies updates the code got executed</p>
      <h1>Height : {height}</h1>
      <h1>width : {width}</h1>
    </div>
  )
}

export default App
