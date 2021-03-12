const IconWrapper = ({ children }) => {
  return (
    <div className="absolute inset-y-0 flex items-center left-0 pl-3 pointer-events-none">
      {children}
    </div>
  );
};

export default IconWrapper;
