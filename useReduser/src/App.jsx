import React, { useReducer, useState } from 'react'
const App = () => {
  const [state,dispatch] = useReducer(reduserFn(),{count:1})
  const [count,setCount] = useState(1)
  function reduserFn(state,action){
    switch (action.type) {
      case "increment":
        return {count : state.count+1};
      case "decrement" : 
      return {count : state.count-1}; 
      default:
        return state;
    }
    return {count : state.count + 1}
  }
  function increment(){
    dispatch({type:"increment"})
  }
  function decrement(){
    dispatch({type:"decrement"})
  }
  return (
    <div style={{display:"flex", padding:"23px"}}>
      <button style={{padding:"10px",margin:"20px"}} onClick={()=>decrement()}> - </button>
      <h1>{count}</h1>
      <button style={{padding:"10px",margin:"20px"}} onClick={()=>increment()}> + </button>
    </div>
  )
}

export default App
