import React from 'react'
import Home from './pages/Home'
import About from './pages/About'
import Settings from './pages/settings'
import Users from './pages/Users'
import {BrowserRouter,Routes,Route} from 'react-router-dom'

const App = () => {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path='/user' element={<Users/>}></Route>
      <Route path='/settings' element={<Settings/>}></Route>
      <Route path='/about' element={<About/>}></Route>
     </Routes>
    </BrowserRouter>
  )
}

export default App
