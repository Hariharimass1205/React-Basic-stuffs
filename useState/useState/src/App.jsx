import React,{useEffect, useState} from 'react'
import OrderPage from './OrderPage.jsx'
function App() {
  let [num, setNum] = useState(0)
  return (
  //  <div>
  //  <h1>{num}</h1>
  //  <button onClick={()=>{setNum(num = num + 1)}}>Increment</button>
  //  <button onClick={()=>{setNum(num = 0)}}>Reset</button>
  //  <button onClick={()=>{setNum(num = num - 1)}}>Decrement</button>
  //  </div>
  <>
  <OrderPage />
  </>
  )
}
export default App
