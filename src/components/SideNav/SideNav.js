import userImg from "../../assets/userImg.png";
import { AiFillCamera } from "react-icons/ai";
import history from "../../utils/history";
import Button from "./Button";

const SideNav = () => {
  return (
    <nav className="bg-white flex flex-col w-1/6 items-center justify-between">
      <div className="flex justify-between flex-col items-center">
        <div className="relative mr-auto ml-6 mt-8">
          <img className="rounded-full w-28" src={userImg} alt="images" />
          <div className="bg-red-500 flex justify-center rounded-full p-1 absolute top-20 right-0">
            <AiFillCamera className="text-xl text-white" />
          </div>
        </div>
        <div className="ml-6 mt-10">
          <Button>Profile</Button>
          <Button>Dashboard</Button>
          <Button onClick={() => history.push("/all-assets")}>Assets</Button>
          <Button>Users</Button>
        </div>
      </div>

      <div>
        <small>&copy; Copyright 2021 www.hasob.ng</small>
      </div>
    </nav>
  );
};

export default SideNav;
