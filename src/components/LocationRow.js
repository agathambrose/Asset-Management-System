import React from 'react'

function LocationRow({sn, office, edit, remove}) {
    return (
        <>
        <div className="bg-white font-semibold h-16  mb-1 mx-1 flex  items-center justify-center text-center text-base md:h-14">
          <h3 className=" mr-0.5 px-2 w-1/6 ">{sn}</h3>
          <h4 className=" mr-0.5 px-2 w-2/4">{office}</h4>
          <h4 className=" mr-0.5 px-2 w-1/4 text-red-500">{edit}</h4>
          <h4 className=" px-2 w-1/4 text-red-500">{remove}</h4>
        </div>
    
      </>
    )
}

export default LocationRow
