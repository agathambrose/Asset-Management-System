import { Field } from "formik";

const Checkbox = ({ children }) => {
  return (
    <label className="flex items-center space-x-2 cursor-pointer">
      <Field
        type="checkbox"
        name="checkbox"
        className="form-checkbox appearance-none text-black border-black rounded-sm focus:outline-none focus:ring-0 focus:ring-offset-0 cursor-pointer"
      />
      <span>{children}</span>
    </label>
  );
};

export default Checkbox;
