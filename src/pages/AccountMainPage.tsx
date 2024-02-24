import React from 'react'
import "../styles/accountpage.css"
import personLogo from "../assets/person.png"
import bookingLogo from "../assets/icons8-booking-64.png"
import FeatureBox from '../comonents/FeatureBox'
import ProfileHeading from '../comonents/ProfileHeading'
import RecommendedBox from '../comonents/RecommendedBox'
import searchIcon from "../assets/icons8-search-100.png"
import bookingIcon from "../assets/icons8-5-star-hotel-100.png"
import reviewIcon from "../assets/icons8-review-100 (1).png"
import settingIcon from "../assets/icons8-settings-100 (2).png"
import notificationIcon from "../assets/icons8-notification-64.png"
import supportIcon from "../assets/icons8-customer-support-100.png"

const AccountMainPage = () => {
  return (
    <div id="accountpage">
        <div id='header-panel'>
          <ProfileHeading />
        </div>
        <div id="nav-tab">
          <h1>Welcome , Fortune112</h1>
          <p>All systems are running smoothly</p>
          <div id="box-container" className='container-card'>
            <FeatureBox feature='Search and Filters' imagepath={searchIcon}/>
            <FeatureBox feature='Booking' imagepath={bookingIcon}/>
            <FeatureBox feature="Reviews and Ratings" imagepath={reviewIcon}/>
            <FeatureBox feature="Notifications" imagepath={notificationIcon}/>
            <FeatureBox feature="Settings" imagepath={settingIcon}/>
            <FeatureBox feature='Customer Support' imagepath={supportIcon}/>
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