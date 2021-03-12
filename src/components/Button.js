const Button = ({ children, ...props }) => {
  const { color, disabled, onClick } = props;
  const textColor = color ? `text-${color}` : "text-black";
  return (
    <button
      onClick={onClick}
      className={`bg-red-500 active:bg-red-600 ${textColor} font-semibold py-1 px-3 border border-black rounded-md shadow-md mt-4 focus:outline-none disabled:opacity-50 disabled:cursor-wait`}
      type="submit"
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default Button;
