import React from 'react'
import NotificationBox from '../comonents/NotificationBox'
import '../styles/notification.css'
import ProfileHeading from '../comonents/ProfileHeading'

const NotificationPage = () => {
  return (
    <div id="notification-box-container" style={{padding:0}}>
       <div id='header-panel'> 
        <div style={{display:"inline-block"}}>
          <h1 style={{
            color:'white'
          }}>SereneStay</h1>
        </div>
          <ProfileHeading />
        </div>
        <div style={{padding:30}}>
        <h2 className='poppins-bold'>Notifications </h2>
        <NotificationBox message='Your hotels has been booked'/>
        <NotificationBox message='Ur booking has expired'/>
        <NotificationBox message='You have contacted customer serivce'/>
        </div>
        
    </div>
  )
}

export default NotificationPage