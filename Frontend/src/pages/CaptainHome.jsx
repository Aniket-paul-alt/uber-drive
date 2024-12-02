import React, { useRef, useState } from 'react'
import { Link } from "react-router-dom"
import CaptainDetail from '../components/CaptainDetail'
import RidePopUp from '../components/RidePopUp'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import ConfirmRidePopUp from '../components/ConfirmRidePopUp'

const CaptainHome = () => {
  const [ridePopUpPanel, setRidePopUpPanel] = useState(true)
  const [confirmRidePopUpPanel, setConfirmRidePopUpPanel] = useState(false)
  const ridePopUpPanelRef = useRef(null)
  const confirmRidePopUpPanelRef = useRef(null)

  useGSAP(function () {
    if (ridePopUpPanel) {
      gsap.to(ridePopUpPanelRef.current, {
        transform: 'translateY(0)',
      })
    } else {
      gsap.to(ridePopUpPanelRef.current, {
        transform: 'translateY(100%)',
      })
    }
  }, [ridePopUpPanel])
  
  useGSAP(function () {
    if (confirmRidePopUpPanel) {
      gsap.to(confirmRidePopUpPanelRef.current, {
        transform: 'translateY(0)',
      })
    } else {
      gsap.to(confirmRidePopUpPanelRef.current, {
        transform: 'translateY(100%)',
      })
    }
  }, [confirmRidePopUpPanel])

  return (
    <div className='h-screen'>
      <div className='fixed p-4 top-0 flex items-center justify-between w-full'>
        <img className='w-16' src="https://www.svgrepo.com/show/505031/uber-driver.svg" alt="" />
        <Link to='/captain-login' className='h-10 w-10 ring-2 bg-white flex items-center justify-center rounded-full ri'>
          <i className='text-lg font-medium ri-logout-box-r-line'></i>
        </Link>
      </div>
      <div className='h-3/5'>
        <img className='h-full w-full object-cover' src="https://i2-prod.mylondon.news//article16106961.ece/ALTERNATES/s1200d/2_Uber-pink-cars.jpg" alt="" />
      </div>
      <div className='h-2/5 p-6'>
        <CaptainDetail/>
      </div>
      <div ref={ridePopUpPanelRef} className='fixed w-full z-10 translate-y-full bottom-0 bg-white px-3 py-10 pt-12'>
        <RidePopUp setRidePopUpPanel={setRidePopUpPanel} setConfirmRidePopUpPanel={setConfirmRidePopUpPanel} />
      </div>
      <div ref={confirmRidePopUpPanelRef} className='fixed w-full h-screen z-10 translate-y-full bottom-0 bg-white px-3 py-10 pt-12'>
        <ConfirmRidePopUp setConfirmRidePopUpPanel={setConfirmRidePopUpPanel} setRidePopUpPanel={setRidePopUpPanel} />
      </div>
    </div>
  )
}

export default CaptainHome