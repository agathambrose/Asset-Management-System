import { AiFillEye as VisibleEye, AiFillEyeInvisible as InvisibleEye } from "react-icons/ai";

const EyeButton = ({ showPassword, setShowPassword }) => {
  return (
    <button
      type="button"
      className="absolute inset-y-0 right-0 pr-3 flex items-center appearance-none focus:outline-none"
      onClick={() => setShowPassword(!showPassword)}
    >
      {showPassword ? <VisibleEye className="h-5 w-5" /> : <InvisibleEye className="h-5 w-5" />}
    </button>
  );
};

export default EyeButton;
