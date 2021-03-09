const Button = ({ children, ...props }) => {
  return (
    <button
      className="bg-red-500 active:bg-red-600 text-white py-1 px-3 border border-black rounded-md shadow-md mt-4 focus:outline-none disabled:opacity-50 disabled:cursor-wait"
      type="submit"
      disabled={props.disabled}
    >
      {children}
    </button>
  );
};

export default Button;
