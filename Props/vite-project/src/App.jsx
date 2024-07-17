import React, { useState } from 'react'
import Student from './student.jsx'
function App() {

  const [user, setUser] = useState([{ name: "hari", age: 23, sex: "male" }])
  function handleSubmit(e) {
    e.preventDefault()
    console.log(e.target);
    const val = { name: e.target.name.value, age: e.target.age.value, sex: e.target.sex.value }

    setUser(prev => [...prev,val])

  }

  

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input type="text" name='name' /><input type="text" name='age' /><input type="text" name='sex' />
        <button type="submit">submit</button>
      </form>
      {user.map((u, i) => (
        <div key={i}>

          <Student name={u.name} age={u.age} sex={u.sex} ></Student>
        </div>
      ))}

    </>
  )
}

export default App
