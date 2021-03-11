import userImg from "../../assets/userImg.png";
import { AiFillCamera } from "react-icons/ai";
import history from "../../utils/history";

const SideNav = () => {
  return (
    <div className="p-4 bg-white flex flex-col w-1/6 rounded-md items-center justify-between">
      <div className="relative mr-auto">
        <img className="rounded-full w-28" src={userImg} alt="images" />
        <div className="bg-red-500 flex justify-center rounded-full p-1 absolute top-20 right-0">
          <AiFillCamera className="text-xl text-white" />
        </div>
      </div>

      <div>
        <button className="bg-gray-600 font-semibold active:bg-red-500 w-10/12 p-3 mb-5 rounded-r-full focus:outline-none hover:bg-red-600">
          Profile
        </button>

        <button className="bg-gray-600 font-semibold active:bg-red-500 w-10/12 p-3 mb-5 rounded-r-full focus:outline-none hover:bg-red-600">
          Dashboard
        </button>

        <button
          onClick={() => history.push("/allAssets")}
          className="bg-gray-600 font-semibold active:bg-red-500 w-10/12 p-3 mb-5 rounded-r-full focus:outline-none hover:bg-red-600"
        >
          Assets
        </button>

        <button className="bg-gray-600 font-semibold active:bg-red-500 w-10/12 p-3 rounded-r-full focus:outline-none hover:bg-red-600">
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
