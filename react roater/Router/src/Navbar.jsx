import React from 'react'
import {Link} from 'react-router-dom'
const Navbar = () => {
  return (
    <nav style={{display:'flex',backgroundColor:'gray'}}>
      <h1>Harry</h1>
      <div style={{justifyContent:'space-between',display:'flex'}}>
      <ul >
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/user'>User</Link></li>
        <li><Link to='/about'>About</Link></li>
        <li><Link to='/settings'>Settings</Link></li>
      </ul>
      </div>
    </nav>
  )
}

export default Navbar
