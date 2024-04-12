import React from 'react'
import ProfileHeading from '../comonents/ProfileHeading'
import HotelBookingItems from '../comonents/HotelBookingItems'
import HotelImage from '../assets/pexels-pixabay-210604.jpg'
import '../styles/listhotelbooking.css'

const testData={
    id:1,
    location:"NO 3 Abia road",
    name:'Freedom Hotel',
    pricePerNight:30000,
    rating:3.5,
    imgUrl:HotelImage
}

const ListHotelBooking = () => {

  return (
    <div id="list-hotel-booking">
        <div id='header-panel'> 
        <div style={{display:"inline-block"}}>
          <h1 style={{
            color:'white'
          }}>SereneStay</h1>
        </div>
          <ProfileHeading />
        </div>
        <div id='hotel-booking-container'>
            <HotelBookingItems data={testData}/>
            <HotelBookingItems data={testData}/>
        </div>
    </div>
  )
}

export default ListHotelBooking