const EditInput = props => {
  const { type, placeholder, className } = props;

  return (
    <input
      type={type}
      className={`form-input rounded-md w-full bg-gray-500 placeholder-gray-700 py-3 px-3 ${
        className ? className : ""
      }`}
      placeholder={placeholder}
      autoComplete="on"
    />
  );
};

export default EditInput;
