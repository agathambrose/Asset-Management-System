import { NavLink } from "react-router-dom";
import history from "../../utils/history";

const NavButton = ({ children, ...props }) => {
  const { path, onClick } = props;
  const bg = history.location.pathname === path ? "bg-red-500" : "bg-gray-500";

  return (
    <NavLink to={path}>
      <button
        onClick={onClick}
        className={`btn-nav ${bg} font-semibold active:bg-red-500 w-10/12 p-3 mb-5 rounded-r-full focus:outline-none hover:bg-red-600 hover:text-white shadow-md border-2 border-white `}
      >
        {children}
      </button>
    </NavLink>
  );
};

export default NavButton;
