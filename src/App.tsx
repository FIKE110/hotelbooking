import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import LoginPage from './pages/LoginPage'
import SignupPage from './pages/SignupPage'
import { BrowserRouter,Route,Routes } from 'react-router-dom'
import AccountMainPage from './pages/AccountMainPage'
import SearchPage from './pages/SearchPage'
import HotelBooking from './pages/HotelBooking'
import NotificationPage from './pages/NotificationPage'
import CustomerCarePage from './pages/CustomerCarePage'
import HotelBookingItems from './comonents/HotelBookingItems'
import ListHotelBooking from './pages/ListHotelBooking'

function App() {
  return (
   <BrowserRouter>
    <Routes>
      <Route path='/login' Component={LoginPage} />
      <Route path='/signup' Component={SignupPage} />
      <Route path="/dashboard" Component={AccountMainPage} />
      <Route path="/dashboard/search" Component={SearchPage} />
      <Route path="/dashboard/booking" Component={ListHotelBooking} />
      <Route path="/booking/:id" Component={HotelBooking} />
      <Route path="/dashboard/notifications" Component={NotificationPage} />
      <Route path="/customercare" Component={CustomerCarePage} />
   </Routes>
   </BrowserRouter>
  )
}

export default App
