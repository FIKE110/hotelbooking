import React from 'react'
import { Rating } from '@mui/material'

const Review = () => {
  return (
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
  )
}

export default Review