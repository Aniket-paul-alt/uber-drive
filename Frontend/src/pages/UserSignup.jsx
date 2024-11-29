import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from "axios"
import {UserDataContext} from '../context/userContext.jsx'

const UserSignup = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [firstname, setFirstname] = useState("")
    const [lastname, setLastname] = useState("")
    const [userData, setUserData] = useState({})

    const navigate = useNavigate()

    const {user, setUser} = React.useContext(UserDataContext)

    const handleFormSubmit = async(e) =>{
        e.preventDefault()
        
        const newUser = {
            fullname:{
                firstname,
                lastname
            },
            email,
            password
        }

        const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/users/register`, newUser)

        if(response.status === 201){
            const data = response.data

            setUser(data.user)

            navigate('/home')
        }

        setEmail("")
        setPassword("")
        setFirstname("")
        setLastname("")
    }
  return (
    <div className='p-7 h-screen flex flex-col justify-between'>
        <div>
        <img className='w-16 mb-5' src="https://download.logo.wine/logo/Uber/Uber-Logo.wine.png" alt="uber-logo" />
        <form onSubmit={handleFormSubmit}>
            <h3 className='text-lg font-medium mb-2'>What's your name</h3>
            <div className='flex gap-4 mb-5'>
            <input 
            type="text" 
            required 
            value={firstname}
            onChange={(e)=> setFirstname(e.target.value)}
            placeholder='First name'
            className='bg-[#eeeeee] w-1/2 rounded px-4 py-2 border text-base placeholder:text-sm'
            />
            <input 
            type="text" 
            required 
            value={lastname}
            onChange={(e)=> setLastname(e.target.value)}
            placeholder='Last name'
            className='bg-[#eeeeee] w-1/2 rounded px-4 py-2 border text-lg placeholder:text-base'
            />
            </div>
            <h3 className='text-lg font-medium mb-2'>What's your email</h3>
            <input 
            type="email" 
            required 
            value={email}
            onChange={(e)=> setEmail(e.target.value)}
            placeholder='email@eaxmple.com'
            className='bg-[#eeeeee] mb-5 rounded px-4 py-2 border w-full text-lg placeholder:text-base'
            />
            <h3 className='text-lg font-medium mb-2'>Enter Password</h3>
            <input 
            type="password" 
            required 
            value={password}
            onChange={(e)=> setPassword(e.target.value)}
            placeholder='password'
            className='bg-[#eeeeee] mb-5 rounded px-4 py-2 border w-full text-lg placeholder:text-base'
            />
            <button className='bg-[#111] text-white font font-semibold mb-3 rounded px-4 py-2 border w-full text-lg'>Register</button>
        </form>
        <p className='text-center'>Already have account? <Link to='/login' className='text-blue-600'>Login here</Link></p>
        </div>
        <div>
            <p className='text-[10px] leading-tight'>By proceeding, you consent to get calls, WhatsApp or SMS messages, including by automated means, from Uber and its affiliates to the number provided</p>
        </div>
    </div>
  )
}

export default UserSignup