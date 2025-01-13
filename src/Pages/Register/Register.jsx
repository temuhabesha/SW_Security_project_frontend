import React from 'react'
import './Register.css'

function Register() {
  return (
    <div className='register'>
      <h1>Sign Up</h1>
      <form>
        <div className="uname">
            <label htmlFor="username">username:-</label>
            <input type="text" placeholder='username'/>
        </div>
        <div className="fname">
            <label htmlFor="firstname">firstname:-</label>
            <input type="text" placeholder='firstname'/>
        </div>
        <div className="lname">
            <label htmlFor="lastname">lastname:-</label>
            <input type="text" placeholder='lastname'/>
        </div>
        <div className="uemail">
            <label htmlFor="email">email:-</label>
            <input type="email" placeholder='email'/>
        </div>
        <div className="upassword">
            <label htmlFor="password">password:-</label>
            <input type="text" placeholder='password'/>
        </div>
        <button type='submit'>SignUp</button>
      </form>
      <div className="chose">
        <p>if you have account click here <span><a href="/login">Log In</a></span></p>
      </div>
    </div>
  )
}

export default Register
