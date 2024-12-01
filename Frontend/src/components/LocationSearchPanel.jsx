import React from 'react'

const LocationSearchPanel = (props) => {

    // sample array of location
    const locations = ['8B, Jadavpur Bus Stand, Kolkata - 1', '6B, Howrah Bus Stand, Howrah - 1', '8D, Kalyani Bus Stand, Nadia - 1']
    return (
        <div>
            {/* sample data */}
            {locations.map((elem, idx) => {
                return (
                    <div key={idx} onClick={()=> {
                        props.setVehiclePanelOpen(true)
                        props.setPanelOpen(false)
                    }} className='flex gap-4 border-2 p-3 border-gray-100 active:border-black rounded-xl items-center my-2 justify-start'>
                        <h2 className='bg-[#eee] h-10 flex items-center justify-center w-10 rounded-full'><i className="ri-map-pin-fill"></i></h2>
                        <h4 className='font-medium'>{elem}</h4>
                    </div>
                )
            })}

        </div>
    )
}

export default LocationSearchPanel