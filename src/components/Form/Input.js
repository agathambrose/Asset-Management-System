import { Field } from "formik";

const Input = ({ name, type, placeholder, pl }) => {
  return (
    <Field
      name={name}
      type={type}
      placeholder={placeholder}
      className={`bg-gray-300 p-2 ${
        pl ? `pl-${pl}` : "pl-12"
      } w-full rounded-md border border-black placeholder-gray-700 text-base font-medium text-black appearance-none focus:outline-none`}
      autoComplete="on"
    />
  );
};

export default Input;
