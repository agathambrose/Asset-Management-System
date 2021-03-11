import React from "react";
import logo from "../../../assets/hasoblogo.png";
import assetmanagerlogo from "../../../assets/asset-manager-logo.png";
import userImg from "../../../assets/userImg.png";

export const Header = () => {
  return (
    <header className="flex justify-between p-3 bg-white fixed left-0 top-0 w-full z-10 h-90">
        <div>
          <img src={logo} alt="images" />
          <img className="ml-14 -mt-2" src={assetmanagerlogo} alt="images" />
        </div>

        <div className="flex">
          <img className="rounded-full" src={userImg} alt="images" />

          <div className="mt-2">
            <h3 className="font-bold">Chukwuma Albert Obiazor</h3>
            <p className="font-bold">Snr. Software Developer</p>
          </div>
        </div>
    </header>
  );
};
