import React from 'react'

const VehiclePanel = (props) => {
  return (
    <div>
        <h5 onClick={() => {
          props.setVehiclePanelOpen(false)
        }} className='p-3 text-3xl absolute top-4 right-4'>
          <i className="ri-arrow-down-wide-line"></i>
        </h5>
        <h3 className='text-2xl font-semibold mb-5'>Choose a Vehicle</h3>
        <div onClick={()=> {
            props.setConfirmRidePanel(true)
            props.setVehiclePanelOpen(false)
        }} className='flex w-full items-center justify-between px-3 py-4 border-2 active:border-black rounded-xl mb-2'>
          <img className='h-14' src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,w_956,h_638/v1682350114/assets/c2/296eac-574a-4a81-a787-8a0387970755/original/UberBlackXL.png" alt="" />
          <div className='w-1/2 ml-2'>
            <h4 className='font-medium text-lg'>UberGo <span><i className='ri-user-3-fill'></i>4</span></h4>
            <h5 className='font-medium text-sm'>2 mins away</h5>
            <p className='font-normal text-xs text-gray-600'>Affordable, compact rides</p>
          </div>
          <h2 className='text-lg font-semibold'>₹193.20</h2>
        </div>
        <div onClick={()=> {
            props.setConfirmRidePanel(true)
            props.setVehiclePanelOpen(false)
        }} className='flex w-full items-center justify-between px-3 py-4 border-2 active:border-black rounded-xl mb-2'>
          <img className='h-14' src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_368,w_552/v1649231091/assets/2c/7fa194-c954-49b2-9c6d-a3b8601370f5/original/Uber_Moto_Orange_312x208_pixels_Mobile.png" alt="" />
          <div className='w-1/2 ml-2'>
            <h4 className='font-medium text-lg'>Moto <span><i className='ri-user-3-fill'></i>1</span></h4>
            <h5 className='font-medium text-sm'>3 mins away</h5>
            <p className='font-normal text-xs text-gray-600'>Affordable, motor-cycle rides</p>
          </div>
          <h2 className='text-lg font-semibold'>₹65.17</h2>
        </div>
        <div onClick={()=> {
            props.setConfirmRidePanel(true)
            props.setVehiclePanelOpen(false)
        }} className='flex w-full items-center justify-between px-3 py-4 border-2 active:border-black rounded-xl mb-2'>
          <img className='h-14' src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_368,w_552/v1648431773/assets/1d/db8c56-0204-4ce4-81ce-56a11a07fe98/original/Uber_Auto_558x372_pixels_Desktop.png" alt="" />
          <div className='w-1/2 ml-2'>
            <h4 className='font-medium text-lg'>UberAuto <span><i className='ri-user-3-fill'></i>3</span></h4>
            <h5 className='font-medium text-sm'>5 mins away</h5>
            <p className='font-normal text-xs text-gray-600'>Affordable, auto rides</p>
          </div>
          <h2 className='text-lg font-semibold'>₹118.54</h2>
        </div>
    </div>
  )
}

export default VehiclePanel