import React from 'react'
import ReactImage from '../assets/pexels-pixabay-210604.jpg'
import { Button } from '@mui/material'
import '../styles/default.css'


const NotificationBox = ({message}:{message?:string}) => {
  return (
    <div className='notification-box'>
        <div style={{backgroundColor:'#5D71C7'}}>
            <img src={ReactImage}/>
            <div style={{paddingLeft:80,display:'flex',justifyContent:'left'}}>
                <p style={{textAlign:'left'}} 
                className='poppins-bold'>{message ? message : "Thank you for signinig fortune"}</p>
            </div>
            <div>
                <button>?</button>
                <Button>!</Button>
            </div>
        </div>
    </div>
  )
}

export default NotificationBox