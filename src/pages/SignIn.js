import { Formik, Form } from "formik";
import * as Yup from "yup";
import { useState } from "react";
import { BsPersonFill as PersonIcon } from "react-icons/bs";
import { RiKeyFill as KeyIcon } from "react-icons/ri";
import { Link } from "react-router-dom";
import { MyInput, Button } from "../components";
import { Checkbox } from "../components/AuthForm";
import { useDispatch } from "react-redux";
import { login } from "../redux/features/user/userSlice";

const SignIn = () => {
  const [showPassword, setShowPassword] = useState(false);
  const dispatch = useDispatch();

  const validationSchema = Yup.object({
    email: Yup.string().email("Invalid email address").required("Required"),
    password: Yup.string().min(6, "Must be at least 6 characters").required("Required"),
  });

  const handleSubmit = async (values, actions) => {
    const user = { email: values.email, password: values.password };
    await dispatch(login(user));
    actions.setSubmitting(false);
  };

  return (
    <Formik
      initialValues={{ email: "", password: "" }}
      onSubmit={handleSubmit}
      validationSchema={validationSchema}
    >
      {({ isSubmitting }) => (
        <Form className="flex flex-col items-center">
          <MyInput name="email" type="email" placeholder="Email" leftIcon={PersonIcon} />
          <MyInput
            className="mt-8"
            name="password"
            type={showPassword ? "text" : "password"}
            placeholder="Password"
            leftIcon={KeyIcon}
            showPassword={showPassword}
            setShowPassword={setShowPassword}
          />
          <div className="flex justify-between text-base font-medium w-full mt-2">
            <Checkbox>Remember Me</Checkbox>
            <Link to="" className="text-red-600">
              <p className="text-right">Forgot Password?</p>
            </Link>
          </div>
          <Button disabled={isSubmitting} color="white">
            Sign In
          </Button>
          <p className="text-base self-start mt-4">
            Don't have an account?{" "}
            <Link to="/sign-up" className="text-red-600">
              Sign Up
            </Link>
          </p>
        </Form>
      )}
    </Formik>
  );
};

export default SignIn;
