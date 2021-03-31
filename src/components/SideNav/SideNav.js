import userImg from "../../assets/user-img.png";
import { AiFillCamera } from "react-icons/ai";
import NavButton from "./NavButton";
import { useDispatch } from "react-redux";
import Button from "../Button";
import { logout } from "../../redux/features/user/userSlice";

const SideNav = () => {
  const dispatch = useDispatch();
  return (
    <nav className="bg-white flex flex-col w-1/6 items-center justify-between pb-2">
      <div className="flex justify-between flex-col items-center">
        <div className="relative mr-auto ml-6 mt-8">
          <img className="rounded-full w-28" src={userImg} alt="images" />
          <div className="bg-red-500 flex justify-center rounded-full p-1 absolute top-20 right-0">
            <AiFillCamera className="text-xl text-white" />
          </div>
        </div>
        <div className="ml-6 mt-10">
          <NavButton path="/profile">Profile</NavButton>
          <NavButton path="/dashboard">Dashboard</NavButton>
          <NavButton path="/all-assets">Assets</NavButton>
          <NavButton path="/users">Users</NavButton>
          <Button color="white" onClick={() => dispatch(logout())}>
            Logout
          </Button>
        </div>
      </div>

      <div>
        <small>&copy; Copyright 2021 www.hasob.ng</small>
      </div>
    </nav>
  );
};

export default SideNav;
