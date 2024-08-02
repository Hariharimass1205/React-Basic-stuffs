import React from 'react'
import Container2 from './container2'
const container1 = ({pass}) => {
  return (
    <div>
      <h1>Container1</h1>
      <Container2 pass={pass}></Container2>
    </div>
  )
}

export default container1
