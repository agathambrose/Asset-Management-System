import { NavLink } from "react-router-dom";

const DashboardButton = ({ children, ...props }) => {
  const { path, className } = props;
  return (
    <NavLink to={path} className="w-fit-content">
      <button
        className={`flex items-center justify-center text-center w-52 h-32 p-4 mr-14 mb-14 rounded-md shadow-md text-xl font-semibold ${
          className ? className : ""
        }`}
      >
        {children}
      </button>
    </NavLink>
  );
};

export default DashboardButton;
