import React from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import EditInput from "../EditProfile/EditInput";

const EditUsersForm = ({ modal }) => {
  const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

  const validationSchema = Yup.object({
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
  });

  const handleEditUser = async (values, actions) => {
    //await dispatch(editUser(user)); dispatch addUser
    //toast
    //clear field
  };

  return (
    <Formik
      initialValues={{
        firstName: "",
        middleName: "",
        lastName: "",
        phoneNumber: "",
        email: "",
        password: "",
        confirmPassword: "",
      }}
      onSubmit={handleEditUser}
      validationSchema={validationSchema}
    >
      {({ isSubmitting }) => (
        <Form className="bg-white flex flex-col rounded-md shadow-lg w-1/3 p-8 pb-4 space-y-5">
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

          <div className="flex justify-between font-semibold">
            <p
              className="text-gray-700 cursor-pointer py-2 px-3 rounded-md hover:bg-gray-300"
              onClick={e => modal.classList.add("hidden")}
            >
              Cancel
            </p>
            <p
              className="text-red-500 cursor-pointer py-2 px-3 rounded-md hover:bg-red-500 hover:text-white"
              onClick={e => modal.classList.add("hidden")} //edit user function
            >
              Edit User
            </p>
          </div>
        </Form>
      )}
    </Formik>
  );
};

export default EditUsersForm;
