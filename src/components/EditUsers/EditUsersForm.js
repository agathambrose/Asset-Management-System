// @ts-nocheck
import React from "react";
import { useFormik } from "formik";
import EditUsersInput from "../EditUsers/EditUsersInput";
import { editUserData } from "../../redux/features/allUsers/allUsersSlice";
import { useDispatch } from "react-redux";

const EditUsersForm = ({ modal }) => {
  const dispatch = useDispatch();
  const initialValues = {
    firstName: "",
    lastName: "",
    phoneNumber: "",
    email: "",
    password: "",
    confirmPassword: "",
    office: "",
  };

  const formik = useFormik({
    initialValues: initialValues,
  });

  const handleEditUser = e => {
    e.preventDefault();
    const user = {
      first_name: formik.values.firstName,
      last_name: formik.values.lastName,
      phone: formik.values.phoneNumber,
      email: formik.values.email,
      password: formik.values.password,
      password_confirmation: formik.values.confirmPassword,
      office: formik.values.office,
    };
    const res = dispatch(editUserData(user));
    console.log(res);
    // return initialValues
  };

  return (
    <form
      className="bg-white flex flex-col rounded-md shadow-lg w-1/3 p-8 pb-4 space-y-5"
      onSubmit={handleEditUser}
    >
      <h2 className="text-xl text-center md:text-2xl font-semibold px-11 pt-3 border-b-2 border-gray-600 mb-2">
        Edit User
      </h2>
      <div className="flex justify-between mb-5">
        <EditUsersInput
          id="firstName"
          type="text"
          name="firstName"
          placeholder="First Name"
          value={formik.values.firstName}
          onChange={formik.handleChange}
          className="w-1/2"
        />
        <EditUsersInput
          id="lastName"
          type="text"
          name="lastName"
          placeholder="Last Name"
          value={formik.values.lastName}
          onChange={formik.handleChange}
          className="w-1/2 ml-2"
        />
      </div>

      <div className="flex justify-between mb-5">
        <EditUsersInput
          id="email"
          type="email"
          name="email"
          value={formik.values.email}
          onChange={formik.handleChange}
          placeholder="Email Address"
          className="w-1/2 "
        />
        <EditUsersInput
          id="tel"
          type="tel"
          name="phoneNumber"
          value={formik.values.phoneNumber}
          onChange={formik.handleChange}
          placeholder="Phone #"
          className="w-1/2 ml-2"
        />
      </div>
      <EditUsersInput
        id="office"
        type="text"
        name="office"
        value={formik.values.office}
        onChange={formik.handleChange}
        placeholder="Office"
        className="w-1/2 "
      />

      <div className="flex justify-between font-semibold">
        <p
          className="text-gray-700 cursor-pointer py-2 px-3 rounded-md hover:bg-gray-300"
          onClick={e => modal.classList.add("hidden")}
        >
          Cancel
        </p>
        <button
          type="submit"
          className="cursor-pointer py-2 px-3 rounded-md bg-red-500 text-white"
        >
          Edit User
        </button>
      </div>
    </form>
  );
};

export default EditUsersForm;
