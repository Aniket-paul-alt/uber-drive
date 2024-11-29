import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const CaptainSignup = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [firstname, setFirstname] = useState("")
    const [lastname, setLastname] = useState("")
    const [userData, setUserData] = useState({})

    const handleFormSubmit = (e) =>{
        e.preventDefault()
        

        setUserData({
            fullname:{
                firstname,
                lastname
            },
            email,
            password
        })

        

        setEmail("")
        setPassword("")
        setFirstname("")
        setLastname("")
    }
  return (
    <div className='p-5 h-screen flex flex-col justify-between'>
        <div>
        <img className='w-16 mb-3' src="https://www.svgrepo.com/show/505031/uber-driver.svg" alt="uber-logo" />
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
        <p className='text-center'>Already have account? <Link to='/captain-login' className='text-blue-600'>Login here</Link></p>
        </div>
        <div>
            <p className='text-[10px] leading-tight'>This site is protected by reCAPTCHA and the <span className='underline'>Google Privacy Policy</span> and <span className='underline'>Terms of Service apply</span></p>
        </div>
    </div>
  )
}

export default CaptainSignup