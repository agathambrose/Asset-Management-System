// @ts-nocheck
//import { ErrorMessage } from 'formik';

const EditUsersInput = ({ ...otherProps }) => {
  return (
    <div>
      <input
        className="form-input rounded-md w-full bg-gray-500 placeholder-gray-700 py-3 px-3 ml-2"
        autoComplete="on"
        {...otherProps}
      />
      {/* <ErrorMessage name={name} className="text-xs text-red-400"/> */}
    </div>
  );
};

export default EditUsersInput;
