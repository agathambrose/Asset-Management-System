import React from "react";
import AllAssetRow from "../components/AllAssetRow";

function AllAssetsPage() {
  return (
    <div className="w-full h-1/2 m-auto border md:w-5/6">
      <h2 className="text-2xl">All Assets</h2>
      <div className="bg-pink w-full flex">
        <input type="text" className="border border-gray-400 px-3 py-2 w-1/3" />
        <button className="bg-red-600 px-3 py-2 rounded-r-lg">Search</button>
      </div>
      {/* SEARCH BAR */}
      <div className="w-full  bg-gray-500 my-5 px-0.5  border rounded">
        {/* TITLE */}
        <div className="bg-gray-500 text-base text-center font-black h-14 mb-1 mx-1 flex items-center justify-center">
          <h4
            className=" mr-0.5 px-2 w-4
           sm:w-12 sm:bg-blue-500 "
          >
            S/N
          </h4>
          <h4 className="mr-0.5 px-2 w-3/6">Name</h4>
          <h4 className="mr-0.5 px-2 w-1/6">Categories</h4>
          <h4 className="mr-0.5 px-2 w-1/6">Quantity</h4>
          <h4 className="mr-0.5 px-2 w-2/6">Location</h4>
          <h4 className=" px-2 w-12">Edit</h4>
        </div>
        {/* Body */}
        <AllAssetRow
          sn="1"
          name="Office WorkStation"
          category="SoftWare"
          quantity="15 Units"
          location="General Office 1"
          edit="edit"
        />

        <AllAssetRow
          sn="2"
          name="LG split  Unit Air Conditioner"
          category="SoftWare"
          quantity="15 Units"
          location="General Office 1"
          edit="edit"
        />
        <AllAssetRow
          sn="3"
          name="Office WorkStation"
          category="SoftWare"
          quantity="15 Units"
          location="General Office 1"
          edit="edit"
        />
      </div>
    </div>
  );
}

export default AllAssetsPage;
