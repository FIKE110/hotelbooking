import React from 'react'
import ProfileHeading from '../comonents/ProfileHeading'
import HotelImage from '../assets/pexels-pixabay-210604.jpg'
import '../styles/booking.css'
import RecommendedBox from '../comonents/RecommendedBox'
import { Rating } from '@mui/material'

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
                    {width:350,height:'auto',
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
  <li>Complimentary breakfast</li>
  <li>Free Wi-Fi</li>
  <li>Airport shuttle service</li>
  <li>Concierge service</li>
  <li>Fitness center</li>
  <li>Swimming pool</li>
  <li>Spa services</li>
  <li>Room upgrades</li>
  <li>Late checkout</li>
  <li>Welcome amenities</li>
  <li>Business center</li>
  <li>Pet-friendly amenities</li>
  <li>On-site dining options</li>
  <li>Valet parking</li>
  <li>Laundry service</li>
  <li>Childcare services</li>
  <li>Tour assistance</li>
  <li>Special events and activities</li>
  <li>In-room amenities</li>
  <li>Loyalty programs</li>
</ul>

</div>

        <div>
  <h2>Guest Reviews</h2>
  <div className="review">
    <div className="reviewer-info">
      <img src="profile-pic.jpg" alt="Profile Picture" />
      <p className="reviewer-name">John Doe</p>
    </div>
    <div className="review-content">
    <Rating name='hotelhalf' defaultValue={4} precision={0.5} readOnly/>
      <p className="comment">"Absolutely breathtaking! From the moment we arrived, we were blown away by the stunning ocean views and impeccable service. The room was spacious and luxurious, the food was divine, and the spa treatments were incredibly relaxing. A truly unforgettable experience."</p>
      <p className="date">Posted on January 15, 2024</p>
    </div>
  </div>

  <div className="review">
    <div className="reviewer-info">
      <img src="profile-pic.jpg" alt="Profile Picture" />
      <p className="reviewer-name">Jane Smith</p>
    </div>
    <div className="review-content">
      <p className="rating">★★★★☆</p>
      <p className="comment">"Overall, a wonderful stay at Oceanview Resort. The staff were friendly and attentive, the amenities were top-notch, and the location was unbeatable. However, we did encounter a minor issue with the air conditioning in our room, but it was quickly resolved by the maintenance team."</p>
      <p className="date">Posted on February 5, 2024</p>
    </div>
  </div>

  <div className="review">
    <div className="reviewer-info">
      <img src="profile-pic.jpg" alt="Profile Picture" />
      <p className="reviewer-name">Emily Johnson</p>
    </div>
    <div className="review-content">
      <p className="rating">★★★☆☆</p>
      <p className="comment">"Had a pleasant stay at Oceanview Resort, but felt that the room could have been cleaner upon arrival. The beachfront location was beautiful, but it was a bit crowded during peak hours. Overall, a decent experience, but there's room for improvement."</p>
      <p className="date">Posted on March 10, 2024</p>
    </div>
  </div>
</div>
    </div>
  )
}

export default HotelBooking