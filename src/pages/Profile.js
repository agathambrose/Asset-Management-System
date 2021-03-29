import { Button } from "../components";
import userImg from "../assets/user-img-full.png";
import { FiPhoneCall } from "react-icons/fi";
import { GrMail } from "react-icons/gr";
import { FaLinkedin, FaTwitter, FaFacebook } from "react-icons/fa";
import { useEffect, useRef, useState } from "react";
import EditProfileModal from "../components/EditProfile/EditProfileModal";
import { useSelector } from "react-redux";

const Profile = () => {
  const [modal, setModal] = useState(null);
  const modalRef = useRef(null);
  useEffect(() => {
    setModal(modalRef.current);
  }, []);
  const {
    first_name,
    middle_name,
    last_name,
    designation,
    office,
    email,
    phone,
    picture_url,
  } = useSelector(state => state.user.user);
  const fullName = `${first_name ?? ""} ${middle_name ?? ""} ${last_name ?? ""}`;
  return (
    <div className="relative bg-white flex-1 flex">
      <hr className="absolute top-20 border w-full border-gray-600 " />

      <div className="w-2/5 flex flex-col items-center pt-6 border-r-4 border-gray-600">
        <h2 className="font-semibold text-2xl mb-5">User Profile</h2>
        <img
          src={picture_url ?? userImg}
          alt="User"
          className="rounded-full w-80 mb-10"
        />
        <div className="w-3/4 font-semibold border border-gray-400  p-4 space-y-4">
          <p className="text-xl">User Profile</p>
          <div className="flex items-center ">
            <FiPhoneCall className="text-xl text-gray-700" />
            <p className="ml-3">{phone ?? "08122278609"}</p>
          </div>
          <div className="flex items-center ">
            <GrMail className="text-xl text-gray-700" />
            <p className="ml-3">{email ?? "Chukwuma@hasob.ng"}</p>
          </div>
          <div className="flex items-center ">
            <FaLinkedin className="text-xl text-linkedin" />
            <p className="ml-3">www.linkedin.com/chukwu</p>
          </div>
        </div>
      </div>

      <div className="w-3/5 flex flex-col items-center">
        <div className="self-end mr-12 mt-4 mb-10">
          <Button onClick={() => modal.classList.remove("hidden")}>Edit Info</Button>
          <EditProfileModal modalRef={modalRef} />
        </div>
        <textarea
          name="summary"
          rows={6}
          placeholder="Summary"
          className="border w-10/12 border-gray-400 rounded-md mb-8"
        />
        <div className="w-10/12 flex rounded-md font-semibold text-xl border border-gray-400  p-4">
          <div className="space-y-5">
            <p>Full Name:</p>
            <p>Email:</p>
            <p>Phone #:</p>
            <p>Office:</p>
            <p>Designation:</p>
            <p>Social Network:</p>
          </div>
          <div className="space-y-5 ml-5">
            <p>{fullName ?? "Chukwuma Albert Obiazor"}</p>
            <p>{email ?? "Chukwuma@hasob.ng"}</p>
            <p>{phone ?? "08122278609"}</p>
            <p>{office ?? "General Office 1"}</p>
            <p>{designation ?? "Snr. Software Engineer"}</p>
            <div className="flex text-2xl items-center justify-around">
              <FaLinkedin className="text-linkedin" />
              <FaTwitter className="text-twitter" />
              <FaFacebook className="text-facebook" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
