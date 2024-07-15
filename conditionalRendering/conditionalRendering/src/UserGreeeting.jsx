import React from 'react'

function UserGreeeting(props) {
  if(props.isLoggedIn){
    return <h1>Welcome {props.userName}</h1>
  }else{
    return <h1>Logged out !!</h1>
  }
}

export default UserGreeeting
