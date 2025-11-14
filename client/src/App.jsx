import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Login from './pages/Login/Login'
import { Navigate, Route, Routes } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import SignUp from './pages/SignUp/SignUp'
function App() {

  return (
    <Routes>
      <Route
        path='/'
        element={<Navigate to='/Login' />}
      />
      <Route
        path='login'
        element={<Login />}
      />
      <Route
        path='signup'
        element={<SignUp />}
      />

    </Routes >

    // <div>
    //   <Login />
    //   <SignUp />
    //   <ToastContainer />
    // </div >
  )
}

export default App