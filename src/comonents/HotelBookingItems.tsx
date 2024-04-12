import React from 'react'
import HotelImage from '../assets/pexels-pixabay-210604.jpg'
import '../styles/default.css'
import { Rating } from '@mui/material'
import Linker from './Linker'

type Data={
    id:number,
    name:string,
    location:string,
    pricePerNight:number,
    rating:number,
    imgUrl:string
}

const testData:Data={
    id:1,
    location:"No 3 Gece street",
    name:'Freedom Hotel',
    pricePerNight:30000,
    rating:3.5,
    imgUrl:HotelImage
}
const HotelBookingItems = ({data}:{data:Data}) => {
    const {id,name,location,pricePerNight,rating,imgUrl} = data

  return (
    <Linker path={`/booking/${id}`}>
    <div style={{display:'flex',padding:25,gap:70}}>
        <div>
            <img src={imgUrl} />
        </div>
        <div>
            <p className='poppins-medium'>Name : {name}</p>
            <p className='poppins-medium'>Location : {location} </p>
            <p className='poppins-medium'>Price by Night : {pricePerNight}</p>
            <Rating defaultValue={rating} precision={0.5} readOnly/>
        </div>
    </div>
    </Linker>
  )
}

export default HotelBookingItems