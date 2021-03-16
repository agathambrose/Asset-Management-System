import React from "react";
import { TiHomeOutline } from "react-icons/ti";
import { HiOutlineLink } from "react-icons/hi";
import { FiPhoneCall, FiMail } from "react-icons/fi";
import asset from "../assets/asset.png";

const ViewAssets = () => {
  return (
    <>
      <div className="relative bg-white flex-1 flex">
        <hr className="absolute top-20 border w-full border-gray-600 " />

        <div className="w-2/5 flex flex-col items-center pt-6 border-r-4 border-gray-600">
          <h2 className="font-semibold text-2xl mb-5">Asset</h2>
          <img src={asset} alt="asset" className="rounded-full w-80 mb-10" />

          <div className="w-3/4 font-semibold border border-gray-400 p-4 space-y-4">
            <p className="text-xl">Vendor Details</p>
            <div className="flex items-center ">
              <TiHomeOutline className="text-xl text-gray-200" />
              <p className="ml-3">HP Nigeria Limited</p>
            </div>
            <div className="flex items-center ">
              <FiPhoneCall className="text-xl text-gray-200" />
              <p className="ml-3">0812223548</p>
            </div>
            <div className="flex items-center ">
              <FiMail className="text-xl text-gray-200" />
              <p className="ml-3">chukwuma@hp-ng.com</p>
            </div>
            <div className="flex items-center ">
              <HiOutlineLink className="text-xl text-gray-200" />
              <p className="ml-3">www.hp-nigeria.com</p>
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center">
          <div className="flex ml-12 mt-4 mb-10">
            <h2 className="font-semibold text-2xl">Basic Information</h2>
            <div className="mt-4 flex items-center">
              <button className="cursor-pointer rounded-md bg-red-500 text-white ml-4 py-2 px-3">
                Add Asset
              </button>
              <button className="cursor-pointer rounded-md bg-red-500 text-white ml-4 py-2 px-3">
                Edit Asset
              </button>
            </div>
          </div>
          <textarea
            name="summary"
            rows={6}
            placeholder="Summary"
            className="border w-10/12 border-gray-400 rounded-md mb-8"
          />
          <div className="w-10/12 flex rounded-md font-semibold text-xl border border-gray-400  p-4">
            <div className="space-y-5">
              <p>Asset Id:</p>
              <p>Serial #:</p>
              <p>Date of Purchase:</p>
              <p>Status:</p>
              <p>Location:</p>
              <p>Assigned to:</p>
              <p>Issue Date:</p>
              <p>Due Date:</p>
            </div>
            <div className="space-y-5 ml-5">
              <p>0113767</p>
              <p>23|11|09</p>
              <p>Assigned</p>
              <p>General Office 1</p>
              <p>Snr PHP Developer 1</p>
              <p>7th Dec, 2019</p>
              <p>30th Sept, 2019</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ViewAssets;
