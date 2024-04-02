import React from 'react'
import HotelCard from './HotelCard'
import '../styles/recommendbox.css'
import Slider from './Slider'

const RecommendedBox = () => {
  return (
    <div className='container-card' id="box">
        <div style={{display:'flex',flexWrap:'nowrap',overflow:'hidden'}}>
          <Slider>
          <HotelCard />
          <HotelCard />
          <HotelCard />
          <HotelCard />
          <HotelCard />
          <HotelCard />
          <HotelCard />
          <HotelCard />
          <HotelCard />
          </Slider>
        </div>
    </div>
  )
}

export default RecommendedBox