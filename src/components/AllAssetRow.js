import React from 'react'

function AllAssetRow({sn,name, category, quantity, location, edit}) {
    return (
      <>
        <div
          className="bg-white text-base text-center font-semibold md:h-14 mb-1 mx-1 flex items-center justify-center h-16"
        >
          <h3
            className=" mr-0.5 px-2 w-4
           sm:w-12 sm:bg-blue-500  "
          >
            {sn}
          </h3>
          <h4 className=" mr-0.5 px-2 w-3/6 ">{name}</h4>
          <h4 className=" mr-0.5 px-2 w-1/6">{category}</h4>
          <h4 className=" mr-0.5 px-2 w-1/6">{quantity}</h4>
          <h4 className=" mr-0.5 px-2 w-2/6">{location}</h4>
          <h4 className="  px-2 w-12 text-red-500">{edit}</h4>
        </div>
      </>
    );
}

export default AllAssetRow
