import React, { useContext, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { CaptainDataContext } from '../context/CaptainContext'
import axios from 'axios'

const CaptainLogin = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    
    const navigate = useNavigate()
    const {captain, setCaptain} = useContext(CaptainDataContext)

    const handleFormSubmit = async(e) =>{
        e.preventDefault()
        

        const captainData = {
            email, password
        }

        const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/captains/login`, captainData)

        if(response.status === 200){
            const data = response.data
            setCaptain(data.captain)
            localStorage.setItem('token', data.token)

            navigate('/captain-home')
        }

        setEmail("")
        setPassword("")
    }

  return (
    <div className='p-7 h-screen flex flex-col justify-between'>
        <div>
        <img className='w-16 mb-3' src="https://www.svgrepo.com/show/505031/uber-driver.svg" alt="uber-logo" />
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
        <p className='text-center'>Want to join a fleet? <Link to='/captain-signup' className='text-blue-600'>Register as a Captain</Link></p>
        </div>
        <div>
            <Link to='/login' className='bg-[#14bc52] flex items-center justify-center text-white font font-semibold mb-7 rounded px-4 py-2 border w-full text-lg placeholder:text-base'>Sign in as User</Link>
        </div>
    </div>
  )
}

export default CaptainLogin