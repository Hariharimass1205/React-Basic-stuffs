import React from 'react'
import Student   from './student.jsx'
function App() {
  return (
    <>
     <Student name="hari" age={23} sex="male" ></Student>
     <Student name="naveen" age={21} sex="male" ></Student>
     <Student name="harini" age={18} sex="female" ></Student>
     <Student/>
    </>
  )
}

export default App
