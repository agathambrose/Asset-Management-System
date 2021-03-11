import React from "react";
import { Header } from "./Header/Header";
import SideNav from "./SideNav/SideNav";

export const ReusedContent = ({ children }) => {
  return (
    <div className=" bg-gray-600 min-h-screen flex flex-col h-auto pt-20">
      <Header />
      <div className="h-full  flex justify-between">
        <SideNav />
        <div className=" w-5/6 flex h-full">
          <div className=" mt-14 mx-auto w-11/12 p-3">{children}</div>
        </div>
      </div>
    </div>
  );
};
