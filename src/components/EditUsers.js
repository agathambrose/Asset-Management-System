import React from "react";
import EditInput from "../components/EditProfile/EditInput";

const EditUsers = ({ modalRef }) => {
  const modal = modalRef.current;
  return (
    <>
      <div
        ref={modalRef}
        className="h-screen w-full fixed left-0 top-0 flex justify-center items-center bg-black bg-opacity-50 overflow-hidden"
        onClick={e => {
          if (e.target !== e.currentTarget) return;
          modal.classList.add("hidden");
        }}
      >
        <form className="bg-white flex flex-col rounded-md shadow-lg w-1/3 p-8 pb-4 space-y-5">
          <h2 className="text-xl text-center md:text-2xl font-semibold px-11 pt-3 border-b-2 border-gray-600 mb-2">
            Edit User
          </h2>
          <div className="flex justify-between mb-5">
            <EditInput type="text" placeholder="First Name" className="w-1/2 mr-2" />
            <EditInput type="text" placeholder="Middle Name" className="w-1/2 mr-2" />
          </div>
          <div className="flex justify-between">
            <EditInput type="text" placeholder="Last Name" className="w-1/2 mr-2" />
            <EditInput type="tel" placeholder="Phone #" className="w-1/2 mr-2" />
          </div>
          <div className="flex justify-between">
            <EditInput type="email" placeholder="Email Address" className="w-1/2 mr-2" />
            <EditInput type="password" placeholder="Password" className="w-1/2" />
          </div>

          <textarea
            id="comment"
            className="form-input rounded-md w-full bg-gray-500 placeholder-gray-700 py-3 px-3"
            placeholder="Note (optional)"
          />

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
              Add User
            </p>
          </div>
        </form>
      </div>
    </>
  );
};

export default EditUsers;
