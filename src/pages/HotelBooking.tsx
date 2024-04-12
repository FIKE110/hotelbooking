import React from 'react'
import ProfileHeading from '../comonents/ProfileHeading'
import HotelImage from '../assets/pexels-pixabay-210604.jpg'
import '../styles/booking.css'
import RecommendedBox from '../comonents/RecommendedBox'
import { Rating } from '@mui/material'
import { Perks } from '../comonents/Perks'
import Review from '../comonents/Review'

const hotelPerks = [
  "Complimentary Breakfast",
  "Free Wifi",
  "Airport Shuttle",
  "Concierge Service",
  "Fitness Center",
  "Swimming Pool",
  "Spa Services",
  "Room Upgrades",
  "Late Checkout",
  "Welcome Amenities",
  "Business Center",
  "Pet Friendly",
  "OnSite Dining",
  "Valet Parking",
  "Laundry Service",
  "Childcare Services",
  "Tour Assistance",
  "Special Events",
  "InRoom Amenities",
  "Loyalty Programs"
];

const HotelBooking = () => {
  return (
    <div id="hotelbooking-page">
              <div id='header-panel'> 
        <div style={{display:"inline-block"}}>
          <h1 style={{
            color:'white'
          }}>SereneStay</h1>
        </div>
          <ProfileHeading />
        </div>
        <div id="main-container" style={{width:'100%'}}>
            <div id="head-container">
                <img style={
                    {width:400,height:'auto',
                  borderRadius:50,padding:30
                }}
                     src={HotelImage} />
                     <h2 style={{margin:"0 0 20px 0",padding:0}}>Freedom Hotel</h2>
                <RecommendedBox />
            </div>
        </div>
        <h2 className='poppins-bold'>Welcome to Oceanview Resort</h2>
        <div className='sections'>
 
  <p>
    At Oceanview Resort, we believe in creating unforgettable experiences for our guests. Nestled along the pristine coastline, our hotel offers breathtaking views of the azure ocean and stunning sunsets that paint the sky with vibrant hues.
  </p>
  <p>
    Our commitment to exceptional service and attention to detail ensures that every stay with us is nothing short of extraordinary. Whether you're seeking a romantic getaway, a family vacation, or a corporate retreat, Oceanview Resort provides the perfect setting for relaxation and rejuvenation.
  </p>
  <p>
    Immerse yourself in luxury with our spacious accommodations, thoughtfully designed to provide the utmost comfort and convenience. Indulge your senses at our world-class spa, where expert therapists offer a range of revitalizing treatments to soothe your mind, body, and soul.
  </p>
  <p>
    Experience culinary excellence at our onsite restaurants, where talented chefs craft delectable dishes using the freshest local ingredients. Unwind by the poolside with a refreshing cocktail or explore nearby attractions with the assistance of our dedicated concierge team.
  </p>
  <p>
    Whether you're lounging on our pristine beaches, exploring the vibrant culture of the surrounding area, or simply basking in the tranquility of our resort, Oceanview promises an unforgettable journey filled with cherished memories.
  </p>
  <p>
    We look forward to welcoming you to Oceanview Resort, where every moment is an opportunity to create lasting impressions and unforgettable experiences.
  </p>
</div>
<h2>Hotel perks</h2>
<div className='sections'>
<ul>
  {hotelPerks.map((item)=>(
    <div className='perks-container'>
      <img src={Perks.get(item)}/>
      <li>{item}</li>
    </div>
  ))}
</ul>

</div>

        <div>
  <h2>Guest Reviews</h2>
  <Review />
  <Review />
</div>
    <div style={{flexDirection:'column',
    display:'flex',justifyContent:'center',alignItems:'center'}}>
         <h2>Contact info</h2>
         <p>Email : hotel@gmail.com</p>
         <p>Twitter : @hotel</p>
    </div>
    </div>
  )
}

export default HotelBooking