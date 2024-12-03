import React from 'react'
import { Link } from 'react-router-dom'

const FinishRide = (props) => {
    
    return (
        <div className='h-screen'>
            <h5 onClick={() => {
                props.setFinishRidePanel(false)
            }} className='p-3 text-3xl absolute top-4 right-4'>
                <i className="ri-arrow-down-wide-line"></i>
            </h5>
            <h3 className='text-2xl font-semibold mb-5'>Finish this Ride!</h3>
            <div className='flex items-center justify-between mt-4 p-3 bg-gray-100 rounded-lg'>
                <div className='flex items-center gap-3'>
                    <img className='h-10 w-10 rounded-full object-cover' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTgqUyiQj4k-uPKTPtuhemHKExV8iIMNMs29OYAbESdZL37AVn0M5VuKy1qjdrIwbco2Qg&usqp=CAU" alt="" />
                    <h2 className='text-lg font-medium'>Aniket Paul</h2>
                </div>
                <h5 className='text-lg font-semibold'>2.2 KM</h5>
            </div>
            <div className='flex gap-2 justify-between flex-col items-center'>
                <div className='w-full mt-5'>
                    <div className='flex items-center gap-5 p-3 border-b-2'>
                        <i className='text-lg ri-map-pin-user-fill'></i>
                        <div>
                            <h3 className='text-lg font-medium'>562/11-A</h3>
                            <p className='text-base -mt-1 text-gray-600'>Podrah, Howrah</p>
                        </div>
                    </div>
                    <div className='flex items-center gap-5 p-3 border-b-2'>
                        <i className='text-lg ri-map-pin-2-fill'></i>
                        <div>
                            <h3 className='text-lg font-medium'>562/11-A</h3>
                            <p className='text-base -mt-1 text-gray-600'>Podrah, Howrah</p>
                        </div>
                    </div>
                    <div className='flex items-center gap-5 p-3'>
                        <i className='text-lg ri-currency-line'></i>
                        <div>
                            <h3 className='text-lg font-medium'>₹193.20</h3>
                            <p className='text-base -mt-1 text-gray-600'>Cash Cash</p>
                        </div>
                    </div>
                </div>
                <Link to='/captain-home' className='w-full flex justify-center mt-5 bg-green-600 text-white font-semibold p-2 rounded-lg'>Finish Ride</Link>
            </div>
        </div>
    )
}

export default FinishRide