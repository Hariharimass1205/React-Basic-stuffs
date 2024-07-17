import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'

function App() {

  let [count,setCount] = useState(0)
  let [color,setColor] = useState("white")
  useEffect(()=>{
    if(count==20){
     setColor("red")
    }
  },[count])

  return (
    <div>
      <h1>{count}</h1>
      <button onClick={()=>setCount((c)=>c+1)}>click</button>
      <p style={{background:color}}>ewdwkemeoeoemmeefewf</p>
    </div>
  )
}

export default App
