import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import LoginPage from './pages/LoginPage'
import SignupPage from './pages/SignupPage'
import { BrowserRouter,Route,Routes } from 'react-router-dom'
import AccountMainPage from './pages/AccountMainPage'

function App() {
  return (
   <BrowserRouter>
    <Routes>
      <Route path='/login' Component={LoginPage} />
      <Route path='/signup' Component={SignupPage} />
      <Route path="/dashboard" Component={AccountMainPage} />
   </Routes>
   </BrowserRouter>
  )
}

export default App
