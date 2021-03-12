import { Router, Route, Switch, Redirect } from "react-router-dom";
import {
  SignIn,
  SignUp,
  AllAssets,
  AssignedAssets,
  Location,
  UnassignedAssets,
  Vendors,
  Profile,
} from "./pages";
import history from "./utils/history";

const App = () => {
  return (
    <Router history={history}>
      <Switch>
        <Route exact path="/">
          <Redirect to="/sign-in" />
        </Route>
        <Route path="/sign-in">
          <SignIn />
        </Route>
        <Route path="/sign-up">
          <SignUp />
        </Route>
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
        <Route path="/location">
          <Location />
        </Route>
        <Route path="/profile">
          <Profile />
        </Route>
        {/* Remove this comment when Pages are available */}
        <Route path="/dashboard"></Route>
        <Route path="/users"></Route>
      </Switch>
    </Router>
  );
};

export default App;
