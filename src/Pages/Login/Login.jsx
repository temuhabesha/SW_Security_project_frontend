import React, { useState } from 'react'
import './Login.css'
import axios from 'axios'

function Login() {
  const[email,setemail] = useState('')
  const[password,setpassword] = useState('')
  console.log(email)
  console.log(password);

  async function handlesubmit(e) {
    e.preventDefault();
  try {
      const responce = await axios.post("http://localhost:3000/login", {
        email,
        password,
      });

      alert(responce.data.msg);
  } catch (error) {
    alert(error.response.data.msg)
  }
  }

  return (
    <div className="login">
      <h1>LOGIN PAGE</h1>
      <form onSubmit={handlesubmit}>
        <div className="email">
          <label htmlFor="email">email</label>
          <input type="email" placeholder="enter email" onChange={e=>setemail(e.target.value)}/>
        </div>
        <div className="password">
          <label htmlFor="password">password</label>
          <input type="password" placeholder="password" onChange={e=>setpassword(e.target.value)}/>
        </div>
        <button type='submit'>LogIn</button>
      </form>
    </div>
  );
}

export default Login
