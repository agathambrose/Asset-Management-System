import React from "react";
import { Header } from "./Header/Header";
import SideNav from "./SideNav/SideNav";

export const ReusedContent = ({ children }) => {
  return (
    <div className="bg-gray-500 min-h-screen pt-24">
      <Header />
      <div className='flex flex-col'>
        <SideNav />
        <div>{children}</div>
      </div>
    </div>
  );
};
