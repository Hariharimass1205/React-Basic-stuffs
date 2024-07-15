import React,{useCallback, useState} from 'react'
import List from './List';

function App() {

  const [ number,setNumber] = useState(0)
  const [ dark,setDark] = useState(false)

  let getItem = useCallback(()=> {
    return [number+1 , number+2 ,number+3]
  },[number])  

  let theme = {
    backgroundColor: dark ? "white" : "black",
    color : dark ? "black" : "white"
  }


  return (
    <div style={theme}>
    <input 
    type="number" 
    value={number}
    onChange={(event)=>setNumber(parseInt(event.target.value))}
    />
   <button onClick={()=>setDark((curr)=>!curr)}>Toggle theme</button>

   <List getItem={getItem}></List>
    </div>
  )
}

export default App
