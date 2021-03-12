import { Router, Route, Switch, Redirect } from "react-router-dom";
import history from "./utils/history";
import loadable from "@loadable/component";
import { AuthContainer, MainContainer } from "./components";

const SignIn = loadable(() => import("./pages/SignIn"), {
  fallback: <div>Loading...</div>,
});
const SignUp = loadable(() => import("./pages/SignUp"), {
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

const App = () => {
  return (
    <Router history={history}>
      <Switch>
        <Route exact path="/">
          <Redirect to="/sign-in" />
        </Route>
        <Route path="/sign-in">
          <AuthContainer>
            <SignIn />
          </AuthContainer>
        </Route>
        <Route path="/sign-up">
          <AuthContainer>
            <SignUp />
          </AuthContainer>
        </Route>
        <MainContainer>
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
          {/* Remove this comment when Pages are available */}
          <Route path="/users"></Route>
          <Route path="/notifications"></Route>
        </MainContainer>
      </Switch>
    </Router>
  );
};

export default App;
