import React from 'react'
import "../styles/accountpage.css"
import personLogo from "../assets/person.png"
import bookingLogo from "../assets/icons8-booking-64.png"
import HotelImage from "../assets/pexels-pixabay-210604.jpg"
import FeatureBox from '../comonents/FeatureBox'
import ProfileHeading from '../comonents/ProfileHeading'
import RecommendedBox from '../comonents/RecommendedBox'
import searchIcon from "../assets/icons8-search-100.png"
import bookingIcon from "../assets/icons8-5-star-hotel-100.png"
import reviewIcon from "../assets/icons8-review-100 (1).png"
import settingIcon from "../assets/icons8-settings-100 (2).png"
import notificationIcon from "../assets/icons8-notification-64.png"
import Linker from '../comonents/Linker'
import supportIcon from "../assets/icons8-customer-support-100.png"

const AccountMainPage = () => {
  return (
    <div id="accountpage">
     
        <div id='header-panel'> 
        <div style={{display:"inline-block"}}>
          <h1 style={{
            color:'white'
          }}>SereneStay</h1>
        </div>
          <ProfileHeading />
        </div>
        <div id="nav-tab">
          <h1>Welcome , Fortune112</h1>
          <p>All systems are running smoothly</p>
          <div id="box-container" className='container-card'>
            <Linker path="search"><FeatureBox feature='Search and Filters' imagepath={searchIcon}/></Linker>
            <Linker path="booking"><FeatureBox feature='Booking' imagepath={bookingIcon}/></Linker>
            <FeatureBox feature="Reviews and Ratings" imagepath={reviewIcon}/>
            <Linker path='notifications'><FeatureBox feature="Notifications" imagepath={notificationIcon}/></Linker>
            <FeatureBox feature="Settings" imagepath={settingIcon}/>
            <Linker path='/customercare'><FeatureBox feature='Customer Support' imagepath={supportIcon}/></Linker>
          </div>
          <h1>Top Recommendations</h1>
          <RecommendedBox />
          <h1>Available & Affordable</h1>
          <RecommendedBox />
          <h1>Vip Rooms</h1>
          <RecommendedBox />
          <h1>Classic Rooms</h1>
          <RecommendedBox />
        </div>
    </div>
  )
}

export default AccountMainPage