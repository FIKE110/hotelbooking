import React, { useState } from 'react'
import ReactImage from '../assets/pexels-pixabay-210604.jpg'
import { Button, Modal } from '@mui/material'
import '../styles/default.css'
import { NotificationData } from '../types'
import ModalComponent from './ModalComponent'


const NotificationBox = ({data}:{data:NotificationData}) => {
  const [open,setOpen] = useState<boolean>(false)
  
  return (
    <div className='notification-box' onDoubleClick={()=>setOpen(!open)}>
        <div>
          <div className='image-container' style={{width:'fit-content'
          ,display:'flex',flexDirection:'column'}}>
             <img src={data.sender_image}/>
             <p style={{margin:0,paddingTop:7}} className='poppins-medium'>
              {data.sender_name}</p>
          </div>
           
            <div className='message-container' style={{paddingLeft:80,display:'flex',justifyContent:'left'}}>
                <p style={{textAlign:'left'}} 
                className='poppins-bold'>{data.notification_message}</p>
            </div>
            <div>
                <button>?</button>
                <Button>!</Button>
            </div>
        </div>
        <ModalComponent open={open} setOpen={setOpen} sender={data.sender_name} 
        message={data.notification_message}/>
    </div>
  )
}

export default NotificationBox