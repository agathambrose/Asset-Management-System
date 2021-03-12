import EditInput from "./EditInput";
import { FaLinkedin, FaTwitter, FaFacebook } from "react-icons/fa";

const EditProfileModal = ({ modalRef }) => {
  const modal = modalRef.current;
  return (
    <div
      ref={modalRef}
      className="h-screen w-full fixed left-0 top-0 flex justify-center items-center bg-black bg-opacity-50 hidden"
      onClick={e => {
        if (e.target !== e.currentTarget) return;
        modal.classList.add("hidden");
      }}
    >
      <div className="bg-white flex flex-col rounded-md shadow-lg w-1/3 p-8 pb-4 space-y-5">
        <div className="flex justify-between">
          <EditInput type="text" placeholder="First Name" className="w-1/2 mr-2" />
          <EditInput type="text" placeholder="Middle Name" className="w-1/2 mr-2" />
          <EditInput type="text" placeholder="Last Name" className="w-1/2" />
        </div>
        <EditInput type="email" placeholder="Email" />
        <EditInput type="tel" placeholder="Phone #" />
        <div className="flex justify-between">
          <EditInput type="text" placeholder="Location" className="w-1/2 mr-2" />
          <EditInput type="text" placeholder="Designation" className="w-1/2" />
        </div>
        <EditInput type="password" placeholder="Change Password" />
        <div className="relative">
          <EditInput type="text" placeholder="Social Links" />
          <div className="w-2/3 absolute top-2 right-0 flex text-2xl items-center justify-around">
            <FaLinkedin className="text-linkedin" />
            <FaTwitter className="text-twitter" />
            <FaFacebook className="text-facebook" />
          </div>
        </div>
        <div className="flex justify-between font-semibold">
          <p
            className="text-gray-700 cursor-pointer py-2 px-3 rounded-md hover:bg-gray-300"
            onClick={e => modal.classList.add("hidden")}
          >
            Cancel
          </p>
          <p
            className="text-red-500 cursor-pointer py-2 px-3 rounded-md hover:bg-red-500 hover:text-white"
            onClick={e => modal.classList.add("hidden")}
          >
            Update
          </p>
        </div>
      </div>
    </div>
  );
};

export default EditProfileModal;
