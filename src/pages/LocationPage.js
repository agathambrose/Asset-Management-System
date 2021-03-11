import React from 'react'
import LocationRow from '../components/LocationRow';

function LocationPage() {
    return (
      <div className="w-full h-1/2 m-auto border md:w-5/6">
        <h2 className="text-2xl">Location</h2>
        <div className="bg-pink w-full flex">
          <input
            type="text"
            className="border border-gray-400 px-3 py-2 w-1/3"
          />
          <button className="bg-red-600 px-3 py-2 rounded-r-lg">Search</button>
        </div>
        {/* SEARCH BAR */}
        <div className="w-full bg-gray-500 my-5 px-0.5  border rounded">

          {/* TITLE */}
          <div className="bg-gray-500 font-black h-14 mb-1 mx-1 flex  items-center justify-center text-center">
            <h4 className="mr-0.5 px-2 w-1/6 ">S/N</h4>
            <h4 className="mr-0.5 px-2 w-2/4">Office</h4>
            <h4 className="mr-0.5 px-2 w-1/4">Edit</h4>
            <h4 className="mr-0.5 px-2 w-1/4">Remove</h4>
          </div>
          {/* LOcation BODY (TITLE IN ROW) */}

          <LocationRow
            sn="1"
            office="Office WorkStation"
            edit="Edit"
            remove="X"
          />
          <LocationRow
            sn="1"
            office="Office of the Managing Director"
            edit="Edit"
            remove="X"
          />
          <LocationRow
            sn="1"
            office="Office of the marketing Manager"
            edit="Edit"
            remove="X"
          />
        </div>
      </div>
    );
}

export default LocationPage
