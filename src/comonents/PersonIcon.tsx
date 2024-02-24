import React from 'react'
import personLogo from '../assets/icons8-person-64.png'

const PersonIcon = () => {
  return (
    <div>
      <div style={
        {width:65,height:65,backgroundColor:"white",textAlign:"center",borderRadius:40,
      marginRight:20
      }
        }>
      <img src={personLogo}/>
      </div>
    </div>
  )
}

export default PersonIcon