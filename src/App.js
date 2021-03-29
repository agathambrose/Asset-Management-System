import { Router, Route, Switch, Redirect } from "react-router-dom";
import history from "./utils/history";
import loadable from "@loadable/component";
import { AuthContainer, MainContainer } from "./components";
import { useSelector } from "react-redux";
import CheckAuth from "./components/CheckAuth";

const SignIn = loadable(() => import("./pages/SignIn"), {
  fallback: <div>Loading...</div>,
});
const SignUp = loadable(() => import("./pages/SignUp"), {
  fallback: <div>Loading...</div>,
});
const VerifyEmail = loadable(() => import("./pages/VerifyEmail"), {
  fallback: <div>Loading...</div>,
});
const AllAssets = loadable(() => import("./pages/AllAssets"), {
  fallback: <div>Loading...</div>,
});
const AssignedAssets = loadable(() => import("./pages/AssignedAssets"), {
  fallback: <div>Loading...</div>,
});
const Locations = loadable(() => import("./pages/Locations"), {
  fallback: <div>Loading...</div>,
});
const UnassignedAssets = loadable(() => import("./pages/UnassignedAssets"), {
  fallback: <div>Loading...</div>,
});
const Vendors = loadable(() => import("./pages/Vendors"), {
  fallback: <div>Loading...</div>,
});
const Profile = loadable(() => import("./pages/Profile"), {
  fallback: <div>Loading...</div>,
});
const Dashboard = loadable(() => import("./pages/Dashboard"), {
  fallback: <div>Loading...</div>,
});
const AllUsers = loadable(() => import("./pages/AllUsers"), {
  fallback: <div>Loading...</div>,
});
const Notifications = loadable(() => import("./pages/Notifications"), {
  fallback: <div>Loading...</div>,
});
const ViewAssets = loadable(() => import("./pages/ViewAssets"), {
  fallback: <div>Loading...</div>,
});

const App = () => {
  const { isAuthenticated, signedUp } = useSelector(state => state.user);
  return (
    <Router history={history}>
      <Switch>
        <Route exact path="/">
          {isAuthenticated ? <Redirect to="/dashboard" /> : <Redirect to="/sign-in" />}
        </Route>
        <Route path="/sign-in">
          <AuthContainer>
            {isAuthenticated ? <Redirect to="/" /> : <SignIn />}
          </AuthContainer>
        </Route>
        <Route path="/sign-up">
          <AuthContainer>
            {isAuthenticated ? <Redirect to="/" /> : <SignUp />}
          </AuthContainer>
        </Route>
        <Route path="/verify-email">
          {signedUp ? <VerifyEmail /> : <Redirect to="/" />}
        </Route>
        <MainContainer>
          <CheckAuth>
            <Route path="/vendors">
              <Vendors />
            </Route>
            <Route path="/all-assets">
              <AllAssets />
            </Route>
            <Route path="/assigned-assets">
              <AssignedAssets />
            </Route>
            <Route path="/unassigned-assets">
              <UnassignedAssets />
            </Route>
            <Route path="/locations">
              <Locations />
            </Route>
            <Route path="/profile">
              <Profile />
            </Route>
            <Route path="/dashboard">
              <Dashboard />
            </Route>
            <Route path="/users">
              <AllUsers />
            </Route>
            <Route path="/notifications">
              <Notifications />
            </Route>

            {/* /all-assets/:id */}
            <Route path="/view-assets">
              <ViewAssets />
            </Route>
          </CheckAuth>
        </MainContainer>
      </Switch>
    </Router>
  );
};

export default App;
