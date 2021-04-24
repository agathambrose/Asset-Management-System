// @ts-nocheck
//import { ErrorMessage } from 'formik';

const EditUsersInput = props => {
  const { className, ...otherProps } = props;
  return (
    <div>
      <input
        className={`form-input rounded-md w-full bg-gray-500 placeholder-gray-700 py-3 px-3 ${
          className ? className : ""
        }`}
        autoComplete="on"
        {...otherProps}
      />
      {/* <ErrorMessage name={name} className="text-xs text-red-400"/> */}
    </div>
  );
};

export default EditUsersInput;
