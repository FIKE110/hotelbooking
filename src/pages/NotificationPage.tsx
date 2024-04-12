import React from 'react'
import NotificationBox from '../comonents/NotificationBox'
import '../styles/notification.css'
import notificationTest from '../test/notificationTest'
import ProfileHeading from '../comonents/ProfileHeading'
import ModalComponent from '../comonents/ModalComponent'

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
        {notificationTest.map((item,index)=>( <NotificationBox data={item} key={index} />))}
        <ModalComponent></ModalComponent>
        </div>
        
    </div>
  )
}

export default NotificationPage