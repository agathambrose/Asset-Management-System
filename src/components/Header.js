import logo from "../assets/hasoblogo.png";
import assetmanagerlogo from "../assets/asset-manager-logo.png";
import userImg from "../assets/userImg.png";

const Header = () => {
  return (
    <header className="flex justify-between p-3 bg-white fixed left-0 top-0 w-full z-10 h-90 border-b-3 border-gray-600">
      <div>
        <img src={logo} alt="Logo" />
        <img className="ml-14 -mt-2" src={assetmanagerlogo} alt="Office Asset Manager" />
      </div>

      <div className="flex">
        <img className="rounded-full" src={userImg} alt="User" />

        <div className="mt-2 font-bold">
          <h3>Chukwuma Albert Obiazor</h3>
          <p>Snr. Software Developer</p>
        </div>
      </div>
    </header>
  );
};

export default Header;
