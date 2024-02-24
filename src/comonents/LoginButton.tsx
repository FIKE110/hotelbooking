import React from 'react'
import "../styles/inputcomponent.css"

const LoginButton = ({margin,name,click}:{margin?:string,name:string,click?:()=>void}) => {
  return (
    <div className='inputcomponent-container' style={{
        backgroundColor:"transparent"
    }}>
        <button className='formatted-input' style={{
            width:"100%",
            padding:"20px",
            marginTop:margin ? margin : "13px",
            borderRadius:"15px",
            border:"3px white solid"
        }} onClick={click}>{name}</button>
    </div>
  )
}

export default LoginButton