import React from 'react'
import "../styles/profileheading.css"
import PersonIcon from './PersonIcon'
import OptionsButton from './OptionsButton'

const ProfileHeading = () => {
  return (
    <div id="main-container">
         <div style={{display:"flex",paddingRight:20}}>
            <PersonIcon />
            <OptionsButton />
         </div>
    </div>
  )
}

export default ProfileHeading