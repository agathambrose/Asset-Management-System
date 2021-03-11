import { NavLink } from "react-router-dom";

const AuthContainer = ({ children }) => {
  return (
    // Background
    <div className="flex items-start bg-red-600 md:bg-hasob md:bg-no-repeat md:bg-fixed md:bg-center md:bg-cover min-h-screen p-8">
      {/* Gray box */}
      <div className="w-full max-w-md mx-auto md:mx-0 md:ml-auto bg-gray-500 p-8 sm:p-10 md:p-14 rounded-lg border-black border flex flex-col items-center">
        {/* Nav Items */}
        <div className="flex justify-center text-xl md:text-2xl font-medium space-x-3 mb-14">
          <NavLink to="/sign-in" activeClassName="opacity-100  border-b-2" className="opacity-50">
            <h1 data-testid="sign-in">Sign In</h1>
          </NavLink>
          <hr className="border-l-3 border-gray-600 rounded-full h-10 md:h-14" />
          <NavLink to="/sign-up" activeClassName="opacity-100  border-b-2" className="opacity-50">
            <h1 data-testid="sign-up">Sign Up</h1>
          </NavLink>
        </div>
        {/* Children */}
        <div className="w-full">{children}</div>
      </div>
    </div>
  );
};

export default AuthContainer;
