import React,{useState,useRef, useEffect} from 'react'

function App() {
  const [ input,setInput] = useState("")
  
  const inputRef = useRef()
  console.log(inputRef)
  useEffect(()=>{
    inputRef.current = input
  },[input])

  return (
    <div>
      <input 
      type="text"
      value={input}
      onChange={(event)=>setInput(event.target.value)}
      ></input>
      <h1>Here is the Word :{input}</h1>
      <h1>Here is the Word :{inputRef.current}</h1>
      <button onClick={()=>console.log(inputRef.current)} >
        click
      </button>
    </div>
  )
}

export default App
