import React, { createContext, useState } from 'react'
import Container1 from './container1'
export const themeContext = createContext()
function App() {
  const [theme, setTheme] = useState("light")
  function toggleTheme(){
    setTheme((curr)=>(curr == "light" ? "dark" : "light"))
  }
  return (
    <themeContext.Provider value={{theme:theme}}>
      <button onClick={toggleTheme}>Toggle here</button>
      <h1>App</h1>
       <Container1 pass={theme}></Container1> 
    </themeContext.Provider>
  )
}

export default App
