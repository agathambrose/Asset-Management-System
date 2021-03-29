import { useSelector } from "react-redux";
import { Redirect } from "react-router";

const CheckAuth = ({ children }) => {
  const { isAuthenticated } = useSelector(state => state.user);
  return <>{isAuthenticated ? children : <Redirect to="/sign-in" />}</>;
};

export default CheckAuth;
