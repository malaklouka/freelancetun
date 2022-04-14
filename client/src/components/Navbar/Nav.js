import React, { useEffect, useState } from 'react'
import { loginUser, registerUser } from '../../redux/actions/actions'
import {useDispatch} from 'react-redux'
import {useNavigate} from 'react-router-dom'


import './Nav.css'
const Nav = () => {
    const [name,setName]= useState("")
    const [email,setEmail]= useState("")
    const [password,setPassword]= useState("")
    const [adresse]=useState("")
    const handleSubmit = (e) => {
        e.preventDefault();}
    const dispatch = useDispatch()
    const navigate=useNavigate()
    useEffect(()=>{
        const signUpButton = document.getElementById('signUp');
        const signInButton = document.getElementById('signIn');
        const container = document.getElementById('container');
        
        signUpButton.addEventListener('click', ()=> container.classList.add('right-panel-active')
        );
        signInButton.addEventListener('click', ()=> container.classList.remove('right-panel-active')
        );
    })
    
    return(
<div>
<div class="container" id="container">
        <div class="form-container sign-up-container">
            <form action="#" onSubmit={handleSubmit}>
                <h1>Create Account</h1>
               
                <span>or use your email for registration</span>
                <input type="text" placeholder="Name"   onChange={(e)=>setName(e.target.value)}/>
                <input type="email" placeholder="Email"   onChange={(e)=>setEmail(e.target.value)} />
                <input type="password" placeholder="Password"   onChange={(e)=>setPassword(e.target.value)}/>
                <button class="su" onClick={()=>dispatch(registerUser({name,email,password,adresse},navigate))}>Sign Up</button>
            </form>
        </div>
        <div class="form-container sign-in-container">
            <form action="#" onSubmit={handleSubmit}>
                <h1>Sign In</h1>
               
                <span>or use your account</span>
                <input type="email" placeholder="Email"   onChange={(e)=>setEmail(e.target.value)}/>
                <input type="password" placeholder="Password"   onChange={(e)=>setPassword(e.target.value)}/>
                <button class="si"    onClick={()=>dispatch(loginUser({name,email,password,adresse},navigate))}>Sign In</button>
            </form>
        </div>
        <div class="overlay-container">
            <div class="overlay">
                <div class="overlay-panel overlay-left">
                    <h1>Welcome Back!</h1>
                    <p>To Keep connected with us please login with your personal info</p>
                    <button class="ghost" id="signIn">Sign In</button>
                </div>
                <div class="overlay-panel overlay-right">
                    <h1>Hello, Freelancer!</h1>
                    <p>Enter your personal details and start journey with us</p>
                    <button class="ghost" id="signUp"    >Sign Up</button>
                </div>
            </div>
        </div>
    </div>
</div>
 
  )
}

export default Nav