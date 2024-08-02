import React, { useContext } from 'react'
import { themeContext } from './App';
const container2 = () => {
  const {theme} = useContext(themeContext)
  
  console.log(theme);
    const textCHnage = {
        backgroundColor : theme === "light" ? "black" : "white",
        color : theme === "light" ?  "white" :"black"
    }
  return (
    <div style={textCHnage}>
      <h1 >Container2</h1>
    </div>
  )
}

export default container2
