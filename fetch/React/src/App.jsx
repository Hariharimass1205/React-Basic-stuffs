import React, { useState } from 'react'


const App = () => {
  const [name,setName] = useState(null)
  const [age,setAge] = useState(null)
  function handleSubmit(e){
    e.preventDefault()
    console.log(name,age)
 fetch("http://localhost:3000/in",{
  method:"POST",
  headers:{"Content-Type":"application/json"},
  body:JSON.stringify({
    name:name,
    age:age
  })
 })
 .then(res=>console.log(res.json()))
 .catch((err)=>console.log(err))
}
  return (
    <div>
      <form>
      <label>Name : </label>
      <input onChange={(e)=>setName(e.target.value)} ></input>
      <br></br>
      <label>age : </label>
      <input onChange={(e)=>setAge(e.target.value)}></input>
      <br></br>
      <button onClick={handleSubmit} type='SUBMIT'>Submit</button>
      </form>
    </div>
  )
}

export default App
