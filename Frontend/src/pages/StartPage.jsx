import React from 'react'
import { Link } from 'react-router-dom'

const StartPage = () => {
  return (
    <div>
        <div className='bg-cover bg-center bg-[url(https://images.unsplash.com/photo-1538563188159-070c4db2bc65?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)] h-screen pt-8 flex justify-between flex-col w-full'>
            <img className='w-16 ml-9' src="https://download.logo.wine/logo/Uber/Uber-Logo.wine.png" alt="uber-logo" />
            <div className='bg-white py-4 pb-7 px-4'>
                <h2 className='text-3xl font-bold'>Get Started With Uber</h2>
                <Link to="/login" className='w-full flex items-center justify-center bg-black text-white py-3 rounded mt-5'>Continue</Link>
            </div>
        </div>
    </div>
  )
}

export default StartPage