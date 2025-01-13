import React from 'react'
import Login from './Pages/Login/Login'
import Register from './Pages/Register/Register'
import { Route, Routes } from 'react-router-dom'

function App() {
  return (
    <Routes>
      <Route path='/login' element={<Login/>}/>
      <Route path='/register' element={<Register/>}/>
    </Routes>
  )
}

export default App
