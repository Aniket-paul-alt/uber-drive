import React, { useState, useContext } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { UserDataContext } from '../context/userContext'
import axios from 'axios'

const UserLogin = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [userData, setUserData] = useState({})

    const {user, setUser } = useContext(UserDataContext)
    const navigate = useNavigate()

    const handleFormSubmit = async(e) =>{
        e.preventDefault()

        const userData = {
            email,
            password
        }

        const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/users/login`, userData)

        if(response.status === 200){
            const data = response.data
            setUser(data.user)
            navigate('/home')
        }

        setEmail("")
        setPassword("")
    }

  return (
    <div className='p-7 h-screen flex flex-col justify-between'>
        <div>
        <img className='w-16 mb-5' src="https://download.logo.wine/logo/Uber/Uber-Logo.wine.png" alt="uber-logo" />
        <form onSubmit={handleFormSubmit}>
            <h3 className='text-lg font-medium mb-2'>What's your email</h3>
            <input 
            type="email" 
            required 
            value={email}
            onChange={(e)=> setEmail(e.target.value)}
            placeholder='email@eaxmple.com'
            className='bg-[#eeeeee] mb-7 rounded px-4 py-2 border w-full text-lg placeholder:text-base'
            />
            <h3 className='text-lg font-medium mb-2'>Enter Password</h3>
            <input 
            type="password" 
            required 
            value={password}
            onChange={(e)=> setPassword(e.target.value)}
            placeholder='password'
            className='bg-[#eeeeee] mb-7 rounded px-4 py-2 border w-full text-lg placeholder:text-base'
            />
            <button className='bg-[#111] text-white font font-semibold mb-3 rounded px-4 py-2 border w-full text-lg placeholder:text-base'>Login</button>
        </form>
        <p className='text-center'>New here? <Link to='/signup' className='text-blue-600'>Create new Account</Link></p>
        </div>
        <div>
            <Link to='/captain-login' className='bg-[#eda92a] flex items-center justify-center text-white font font-semibold mb-7 rounded px-4 py-2 border w-full text-lg placeholder:text-base'>Sign in as Captain</Link>
        </div>
    </div>
  )
}

export default UserLogin