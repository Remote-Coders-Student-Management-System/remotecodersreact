import React from 'react'
import './Login.css'

const Login = () => {
  return (
    <div class='login'>
      
        <div class="absolute3">
        <h2>Login</h2>
        <br/>
        <p>Username:<input type="text"/></p>
        <p>Password:<input type="password"/></p>
        <a href="/Home">
        <button class="button">Login</button>
        </a>   
        </div>
    
    </div>
  )
}

export default Login