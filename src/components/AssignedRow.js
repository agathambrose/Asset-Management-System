import React from 'react'

function AssignedRow({sn, name, category, quantity}) {
    return (
      <div className="bg-white text-base font-semibold h-16 mb-1 mx-1 flex text-center  items-center justify-center">
        <h3 className=" mr-0.5 px-2 w-4 sm:w-12 ">{sn}</h3>
        <h4 className=" mr-0.5 px-2 w-3/5">{name}</h4>
        <h4 className=" mr-0.5 px-2 w-1/5">{category}</h4>
        <h4 className=" mr-0.5 px-2 w-1/5">{quantity}</h4>
      
      </div>
    );
}

export default AssignedRow
