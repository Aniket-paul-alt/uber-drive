import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import React, { useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import FinishRide from '../components/FinishRide'

const CaptainRiding = () => {
    const [finishRidePanel, setFinishRidePanel] = useState(false)
    const finishRidePanelRef = useRef(null)


    useGSAP(function () {
        if (finishRidePanel) {
            gsap.to(finishRidePanelRef.current, {
                transform: 'translateY(0)',
            })
        } else {
            gsap.to(finishRidePanelRef.current, {
                transform: 'translateY(100%)',
            })
        }
    }, [finishRidePanel])

    return (
        <div className='h-screen'>
            <div className='fixed p-4 top-0 flex items-center justify-between w-full'>
                <img className='w-16' src="https://www.svgrepo.com/show/505031/uber-driver.svg" alt="" />
                <Link to='/captain-login' className='h-10 w-10 ring-2 bg-white flex items-center justify-center rounded-full ri'>
                    <i className='text-lg font-medium ri-logout-box-r-line'></i>
                </Link>
            </div>
            <div className='h-4/5'>
                <img className='h-full w-full object-cover' src="https://i2-prod.mylondon.news//article16106961.ece/ALTERNATES/s1200d/2_Uber-pink-cars.jpg" alt="" />
            </div>
            <div className='h-1/5 p-6 flex items-center justify-between relative bg-yellow-400 ' onClick={()=>{
                setFinishRidePanel(true)
            }}>
                <h5 onClick={() => {

                }} className='p-3 text-3xl absolute top-0 right-44'>
                    <i className="ri-arrow-up-wide-line"></i>
                </h5>
                <h4 className='text-xl font-semibold'>4 KM away</h4>
                <button className=' mt-5 bg-green-600 text-white font-semibold p-3 px-10 rounded-lg'>Complete Ride</button>
            </div>
            <div ref={finishRidePanelRef} className='fixed w-full h-screen z-10 translate-y-full bottom-0 bg-white px-3 py-10 pt-12'>
                <FinishRide setFinishRidePanel={setFinishRidePanel} />
            </div>
        </div>
    )
}

export default CaptainRiding