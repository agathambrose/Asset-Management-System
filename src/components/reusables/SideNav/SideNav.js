import React from "react";
import userImg from "../../../assets/userImg.png";
import { AiFillCamera } from "react-icons/ai";

const SideNav = () => {
  return (
    <div className="p-4 bg-white flex flex-col w-2/12 rounded-md items-center justify-between fixed left-1 top-24 h-5/6">
      <div className="relative mr-auto">
        <img className="rounded-full w-28" src={userImg} alt="images" />
        <div className="bg-red-500 flex justify-center rounded-full p-1 absolute top-20 right-0">
          <AiFillCamera className="text-xl text-white" />
        </div>
      </div>

      <div>
        <button className="bg-gray-500 active:bg-red-500 w-10/12 p-3 mb-5 rounded-r-full focus:outline-none">
          Profile
        </button>

        <button className="bg-gray-500 active:bg-red-500 w-10/12 p-3 mb-5 rounded-r-full focus:outline-none">
          Dashboard
        </button>

        <button className="bg-gray-500 active:bg-red-500 w-10/12 p-3 mb-5 rounded-r-full focus:outline-none">
          Assets
        </button>

        <button className="bg-gray-500 active:bg-red-500 w-10/12 p-3 rounded-r-full focus:outline-none">
          Users
        </button>
      </div>

      <div>
        <small>&copy; Copyright 2021 www.hasob.ng</small>
      </div>
    </div>
  );
};

export default SideNav;
