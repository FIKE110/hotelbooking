import "../styles/loginpage.css"
import '../styles/default.css'
import InputComponent from '../comonents/InputComponent'
import LoginButton from '../comonents/LoginButton'
import { useState } from "react"
import Axios from "axios"

const Signup=(formData:{username:string,password:string,email:string})=>{
    Axios.post("http://localhost:3000/auth/signup",formData)
    .then(res=>{
        if(res.status==200){
            return res.data
        }
    })
    .then(data=>{
        if(data){
            Login({username:formData.username,password:formData.password})
        }
    })
    .catch(err=>err)
}

const Login=(formData:{username:string,password:string})=>{
    Axios.post("http://localhost:3000/auth/login",formData)
    .then(res=>res.data)
    .then(data=>console.log(data))
    .catch(err=>console.log(err))
}




const SignupPage = () => {
    const [username,setUsername]=useState("")
    const [password,setPassword]=useState("")
    const [email,setEmail]=useState("")

  return (
    <div id="login-container">
        <form id="login"
        onSubmit={(e)=>{
            e.preventDefault()
            Signup({username,password,email})
        }}
        style={{paddingBottom:"10px",backgroundColor:"white"}}>
            <div id='header-container' style={{paddingBottom:"0px"}}>
                <h1 className='poppins-medium'>Create new Account</h1>
                <p style={{
                    fontSize:"15px"
                }}>Already Registered? Log in here.</p>
            </div>
            <div style={{
                display:'flex',
                flexDirection:'column',
                alignItems:"center",
                rowGap:'24px',
                justifyContent:'center',
                width:"100%",backgroundColor:"transparent"}}>
                <InputComponent name='Name' placeholder='Enter username' inputType='text'
                setter={setUsername} />
                <InputComponent name='Email'
                setter={setEmail}
                placeholder='enter your email' inputType='email'/>
                <InputComponent name='Password'
                setter={setPassword}
                placeholder='*****' inputType='password'/>
                <LoginButton margin="2px" name="Signup"/>
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

export default SignupPage