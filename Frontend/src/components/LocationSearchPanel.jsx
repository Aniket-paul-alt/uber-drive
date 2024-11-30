import React from 'react'

const LocationSearchPanel = () => {
    return (
        <div>
            {/* sample data */}
            <div className='flex gap-4 items-center my-4 justify-start'>
                <h2 className='bg-[#eee] h-10 flex items-center justify-center w-10 rounded-full'><i className="ri-map-pin-fill"></i></h2>
                <h4 className='font-medium'>8B, Jadavpur Bus Stand, Kolkata - 1</h4>
            </div>
            <div className='flex gap-4 items-center my-4 justify-start'>
                <h2 className='bg-[#eee] h-10 flex items-center justify-center w-10 rounded-full'><i className="ri-map-pin-fill"></i></h2>
                <h4 className='font-medium'>8B, Jadavpur Bus Stand, Kolkata - 1</h4>
            </div>
            <div className='flex gap-4 items-center my-4 justify-start'>
                <h2 className='bg-[#eee] h-10 flex items-center justify-center w-10 rounded-full'><i className="ri-map-pin-fill"></i></h2>
                <h4 className='font-medium'>8B, Jadavpur Bus Stand, Kolkata - 1</h4>
            </div>
        </div>
    )
}

export default LocationSearchPanel