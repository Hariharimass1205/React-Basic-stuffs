import React from 'react'
import props from 'prop-types'
function student(props) {
  return (
    <div className='box'>
      <p>Name : {props.name}</p>
      <p>age : {props.age}</p>
      <p>sex : {props.sex}</p>
    </div>
  )
}
student.propsType ={
  name : String,
  age : Number,
  sex : String
}
student.defaultProps = {
  name : 'Guest',
  age : "nil",
  sex : "undefined"
}

export default student
