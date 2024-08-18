import  { increment,decrement,reset } from './redux/userSlice'
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

const App = () => {
  const [incrementAmount,setIncrementAmount] = useState(0)
  const count = useSelector((state)=>state.counter.value)
  const dispatch = useDispatch()
  return (
    <div>
      <h1>Counter: {count}</h1>
      <button onClick={() => dispatch(increment())}>Increment</button>
      <button onClick={() => dispatch(decrement())}>Decrement</button>
      <button onClick={() => dispatch(reset())}>Reset</button>
    </div>
  )
}

export default App
