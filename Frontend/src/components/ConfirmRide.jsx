import React from 'react'

const ConfirmRide = () => {
  return (
    <div>
        <h5 onClick={() => {
          props.setVehiclePanelOpen(false)
        }} className='p-3 text-3xl absolute top-4 right-4'>
          <i className="ri-arrow-down-wide-line"></i>
        </h5>
        <h3 className='text-2xl font-semibold mb-5'>Confirm Your Ride</h3>
        <div className='flex gap-2 justify-between flex-col items-center'>
        <img className='h-20' src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,w_956,h_638/v1682350114/assets/c2/296eac-574a-4a81-a787-8a0387970755/original/UberBlackXL.png" alt="" />
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
        <button className='w-full mt-5 bg-green-600 text-white font-semibold p-2 rounded-lg'>Confirm</button>
        </div>
    </div>
  )
}

export default ConfirmRide