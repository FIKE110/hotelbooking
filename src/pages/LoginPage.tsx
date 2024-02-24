import React, { useState } from 'react'
import "../styles/loginpage.css"
import '../styles/default.css'
import InputComponent from '../comonents/InputComponent'
import LoginButton from '../comonents/LoginButton'
import Axios from 'axios'
import { useNavigate} from 'react-router-dom'


const LoginPage = () => {
    const Login=(formData:{username:string,password:string})=>{
        Axios.post("http://localhost:3000/auth/login",formData)
        .then(res=>res.data)
        .then(data=>verifyData(data))
        .catch(err=>console.log(err))
    }
    
    function verifyData(data){
        if(data.token){
            navigate("/dashboard")
        }
    }

    const navigate=useNavigate()
    const [username,setUsername] =useState("")
    const [password,setPassword]=useState("")

  return (
    <div id="login-container">
        <form id="login" onSubmit={e=>{
            e.preventDefault()
            Login({username,password})
        }}>
            <div id='header-container'>
                <h1 className='poppins-medium'>Login</h1>
                <p>Sign in to continue.</p>
            </div>
            <div style={{
                display:'flex',
                flexDirection:'column',
                alignItems:"center",
                rowGap:'24px',
                width:"100%",backgroundColor:"transparent"}}>
                <InputComponent name='Name' placeholder='Enter username' inputType='text' space="10px"
                setter={setUsername}
                />
                <InputComponent name='Password'
                setter={setPassword}
                placeholder='*****' inputType='password' space="10px"/>
                <LoginButton  name="Login"/>
            </div>
        </form>
    </div>
  )
}

const styles={
    main:{
        backgroundColor:"yellow",
        width:100,
        height:100
    }
}

export default LoginPage