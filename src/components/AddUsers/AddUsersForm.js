// @ts-nocheck
import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import EditUsersInput from "../EditUsers/EditUsersInput";
import { addUser } from "../../redux/features/allUsers/allUsersSlice";
import { useDispatch } from "react-redux";

const AddUsersForm = ({ modal }) => {
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

  const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

  const formik = useFormik({
    initialValues: initialValues,

    validationSchema: Yup.object({
      firstName: Yup.string().required("Required"),
      lastName: Yup.string().required("Required"),
      phoneNumber: Yup.string()
        .matches(phoneRegExp, "Invalid phone number")
        .required("Required"),
      email: Yup.string().email("Invalid email address").required("Required"),
      password: Yup.string().required("Required"),
      confirmPassword: Yup.string()
        .oneOf([Yup.ref("password"), null], "Passwords must match")
        .required("Required"),
      office: Yup.string().required("Required"),
    }),
  });

  const handleAddUser = e => {
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
    const res = dispatch(addUser(user));
    console.log(res);
    // return initialValues
  };

  return (
    <form
      className="bg-white flex flex-col rounded-md shadow-lg w-1/3 p-8 pb-4 space-y-5"
      onSubmit={handleAddUser}
    >
      <h2 className="text-xl text-center md:text-2xl font-semibold px-11 pt-3 border-b-2 border-gray-600 mb-2">
        Add User
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
        id="password"
        type="password"
        name="password"
        value={formik.values.password}
        onChange={formik.handleChange}
        placeholder="Password"
        //className="w-1/2"
      />
      <EditUsersInput
        id="confirmPassword"
        type="password"
        name="confirmPassword"
        value={formik.values.confirmPassword}
        onChange={formik.handleChange}
        placeholder="Confirm Password"
        //className="w-1/2 ml-2"
      />
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
          Add User
        </button>
      </div>
    </form>
  );
};

export default AddUsersForm;
