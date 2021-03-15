import React from "react";
import { TiArrowDownThick } from "react-icons/ti";

const Notifications = () => {
  return (
    <>
      <div className="h-full w-full bg-white p-2 m-auto flex flex-col">
        <h2 className="text-base text-xl md:text-2xl font-semibold px-14 pt-5 border-b-2 border-gray-600 mb-2">
          Notification
        </h2>

        <div className="border-2 border-solid border-gray-300 rounded-lg  w-9/12 mx-auto pt-8 px-10 mt-7">
          <div className="notification">
            <h4 className="notification-text">Software License Expiry</h4>
            <p className="notification-time">90 Days</p>
            <span className="pr-4">
              <TiArrowDownThick className="text-xl" />
            </span>
          </div>
          <div className="notification">
            <h4 className="notification-text">Hardware Warranty Expiry</h4>
            <p className="notification-time">90 Days</p>
            <span className="pr-4">
              <TiArrowDownThick className="text-xl" />
            </span>
          </div>
          <div className="notification">
            <h4 className="notification-text">
              <span className="text-red-600">Alert:</span>User access about to expire
            </h4>
            <p className="notification-time">90 Days</p>
            <span className="pr-4">
              <TiArrowDownThick className="text-xl" />
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Notifications;
