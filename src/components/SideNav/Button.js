const Button = ({ children, ...props }) => {
  return (
    <button
      {...props}
      className="bg-gray-600 font-semibold active:bg-red-500 w-10/12 p-3 mb-5 rounded-r-full focus:outline-none hover:bg-red-600"
    >
      {children}
    </button>
  );
};

export default Button;
