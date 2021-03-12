import { ErrorMessage } from "formik";

const FormErrorMessage = ({ name }) => {
  return <ErrorMessage name={name} className="text-base text-red-600" component="div" />;
};

export default FormErrorMessage;
