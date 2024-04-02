import React from 'react'
import HotelImage from "../assets/pexels-pixabay-210604.jpg";
import { Rating } from '@mui/material';
import '../styles/default.css'


const HotelCard = () => {
  return (
    <div style={{width:'fit-content',height:'auto',padding:23}}>
        <div>
          <img src={HotelImage}/>
        </div>
        <div style={{backgroundColor:'white',textAlign:'center',borderRadius:10,marginTop:20,padding:4}}>
          <p style={{paddingTop:7,
            paddingBottom:5
            ,margin:0}} className='poppins-bold'>Name : Freedom Hotel</p>
          <Rating name='hotelhalf' defaultValue={2.5} precision={0.5} readOnly/>
        </div>
    </div>
  )
}

export default HotelCard