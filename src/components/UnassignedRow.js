import React from 'react'

function UnassignedRow({sn,name,category, quantity,assign}) {
    return (
      <>
        <div className="bg-white text-base font-semibold h-16 mb-1 mx-1 flex  items-center justify-center text-center">
          <h3 className=" mr-0.5 px-2 w-4 sm:w-12 ">{sn}</h3>
          <h4 className=" mr-0.5 px-2 w-3/5">{name}</h4>
          <h4 className=" mr-0.5 px-2 w-1/5">{category}</h4>
          <h4 className=" mr-0.5 px-2 w-1/5">{quantity}</h4>
          <h4 className="  px-2 w-1/5 text-red-500">{assign}</h4>
        </div>
    
      </>)
}

export default UnassignedRow
