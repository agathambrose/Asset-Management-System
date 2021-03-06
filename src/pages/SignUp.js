import { Formik, Form } from "formik";
import * as Yup from "yup";
import { useState } from "react";
import { BsPhone as PhoneIcon } from "react-icons/bs";
import { RiKeyFill as KeyIcon } from "react-icons/ri";
import { HiMail as MailIcon } from "react-icons/hi";
import { MyInput, Button } from "../components";
import { Checkbox, FormErrorMessage } from "../components/AuthForm";
import { capitalizeFirstLetter } from "../utils";
import { useDispatch } from "react-redux";
import { signup } from "../redux/features/user/userSlice";

const SignUp = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const dispatch = useDispatch();

  const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

  const validationSchema = Yup.object({
    firstName: Yup.string().min(2, "Must be at least 2 characters").required("Required"),
    middleName: Yup.string().min(2, "Must be at least 2 characters").required("Required"),
    lastName: Yup.string().min(2, "Must be at least 2 characters").required("Required"),
    phoneNumber: Yup.string()
      .matches(phoneRegExp, "Invalid phone number")
      .required("Required"),
    email: Yup.string().email("Invalid email address").required("Required"),
    password: Yup.string().min(6, "Must be at least 6 characters").required("Required"),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref("password"), null], "Passwords must match")
      .required("Required"),
    checkbox: Yup.bool().oneOf([true], "Please check to proceed").required("Required"),
  });

  const handleSubmit = async (values, actions) => {
    const newUser = {
      first_name: capitalizeFirstLetter(values.firstName),
      middle_name: capitalizeFirstLetter(values.middleName),
      last_name: capitalizeFirstLetter(values.lastName),
      phone: values.phoneNumber,
      email: values.email,
      password: values.password,
      password_confirmation: values.confirmPassword,
    };
    await dispatch(signup(newUser));
    // actions.setSubmitting(false);
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
        checkbox: false,
      }}
      onSubmit={handleSubmit}
      validationSchema={validationSchema}
    >
      {({ isSubmitting }) => (
        <Form className="flex flex-col items-center space-y-4">
          <div className="flex justify-between">
            <MyInput
              className="mr-2"
              w="1/2"
              name="firstName"
              type="text"
              placeholder="First Name"
              pl="5"
            />
            <MyInput
              className="ml-2"
              w="1/2"
              name="middleName"
              type="text"
              placeholder="Middle Name"
              pl="5"
            />
          </div>
          <MyInput name="lastName" type="text" placeholder="Last Name" pl="5" />
          <MyInput
            name="phoneNumber"
            type="tel"
            placeholder="Phone Number"
            leftIcon={PhoneIcon}
          />
          <MyInput name="email" type="email" placeholder="Email" leftIcon={MailIcon} />
          <MyInput
            name="password"
            type={showPassword ? "text" : "password"}
            placeholder="Password"
            leftIcon={KeyIcon}
            showPassword={showPassword}
            setShowPassword={setShowPassword}
          />
          <MyInput
            name="confirmPassword"
            type={showConfirmPassword ? "text" : "password"}
            placeholder="Confirm Password"
            leftIcon={KeyIcon}
            showPassword={showConfirmPassword}
            setShowPassword={setShowConfirmPassword}
          />
          <div className="flex flex-col items-center text-base font-medium pb-4">
            <p className="text-center mb-2">
              By creating an Account You agree to our Terms of Service and Privacy Policy!
            </p>
            <Checkbox>Tick box to proceed.</Checkbox>
            <FormErrorMessage name="checkbox" />
          </div>
          <Button disabled={isSubmitting} color="white">
            Sign Up
          </Button>
        </Form>
      )}
    </Formik>
  );
};

export default SignUp;
