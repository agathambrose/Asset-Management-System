import logo from "../assets/hasoblogo.png";
import assetmanagerlogo from "../assets/asset-manager-logo.png";
import userImg from "../assets/user-img.png";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Header = () => {
  const { first_name, middle_name, last_name, designation, picture_url } = useSelector(
    state => state.user.user
  );
  const fullName = `${first_name ?? ""} ${middle_name ?? ""} ${last_name ?? ""}`;
  return (
    <header className="flex justify-between p-3 bg-white fixed left-0 top-0 w-full z-10 h-90 border-b-3 border-gray-600">
      <Link to="/">
        <div>
          <img src={logo} alt="Logo" />
          <img
            className="ml-14 -mt-2"
            src={assetmanagerlogo}
            alt="Office Asset Manager"
          />
        </div>
      </Link>

      <div className="flex">
        <img className="rounded-full mr-2" src={picture_url ?? userImg} alt="User" />

        <div className="mt-2 font-bold">
          <h3>{fullName ?? "Chukwuma Albert Obiazor"}</h3>
          <p>{designation ?? "Snr. Software Developer"}</p>
        </div>
      </div>
    </header>
  );
};

export default Header;
