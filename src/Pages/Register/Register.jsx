import React, { useState } from 'react'
import axios from 'axios'
import './Register.css'
import { use } from 'react'

function Register() {

    const [username,setusername] = useState('')
    const [firstname,setfirstname] = useState('')
    const [lastname,setlastname] = useState('')
    const [email,setemail] = useState('')
    const [password,setpassword] = useState('')

    async function handleSubmit(event) {
        event.preventDefault();
       try {
         const responce = await axios.post("http://localhost:3000/register", {
           username,
           firstname,
           lastname,
           email,
           password,

         });
           alert(responce.data.msg)
       } catch (error) {
        alert(error.response.data.msg)
       }
    }
  return (
    <div className='register'>
      <h1>Sign Up</h1>
      <form onSubmit={handleSubmit}>
        <div className="uname">
            <label htmlFor="username">username:-</label>
            <input type="text" placeholder='username' onChange={e=>setusername(e.target.value)}/>
        </div>
        <div className="fname">
            <label htmlFor="firstname">firstname:-</label>
            <input type="text" placeholder='firstname' onChange={e=>setfirstname(e.target.value)}/>
        </div>
        <div className="lname">
            <label htmlFor="lastname">lastname:-</label>
            <input type="text" placeholder='lastname' onChange={e=>setlastname(e.target.value)}/>
        </div>
        <div className="uemail">
            <label htmlFor="email">email:-</label>
            <input type="email" placeholder='email' onChange={e=>setemail(e.target.value)}/>
        </div>
        <div className="upassword">
            <label htmlFor="password">password:-</label>
            <input type="text" placeholder='password' onChange={e=>setpassword(e.target.value)}/>
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
