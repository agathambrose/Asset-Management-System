const FormControl = ({ children, ...props }) => {
  const { w, className } = props;
  return (
    <div className={`space-y-1 ${w ? `w-${w}` : "w-full"} ${className ? className : ""}`}>
      {children}
    </div>
  );
};

export default FormControl;
