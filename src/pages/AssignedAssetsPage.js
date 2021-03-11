import React from 'react'
import AssignedRow from '../components/AssignedRow';

function AssignedAssetsPage() {
    return (
      <div className="w-full h-screen m-auto border md:w-5/6">
        <h2 className="text-2xl">Assigned Assets</h2>
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
          <div className="bg-gray-500 font-bold h-14 mb-1 mx-1 flex  items-center justify-center text-center">
            <h3 className="mr-0.5 px-2 w-12 ">S/N</h3>
            <h4 className="mr-0.5 px-2 w-3/5">Name</h4>
            <h4 className="mr-0.5 px-2 w-1/5">Category</h4>
            <h4 className="mr-0.5 px-2 w-1/5">Quantity</h4>
          </div>
          {/* Body */}
          <AssignedRow
            sn="1"
            name="Office WorkStation"
            category="SoftWare"
            quantity="15 Units"
            assign="assign"
          />
          <AssignedRow
            sn="1"
            name="Office WorkStation"
            category="SoftWare"
            quantity="15 Units"
            assign="assign"
          />
          <AssignedRow
            sn="1"
            name="Office WorkStation"
            category="SoftWare"
            quantity="15 Units"
            assign="assign"
          />
        </div>
      </div>
    );
}

export default AssignedAssetsPage
