import { Router, Route, Switch, Redirect } from "react-router-dom";
import {
  SignIn,
  SignUp,
  AllAssets,
  AssignedAssets,
  Location,
  UnassignedAssets,
  Vendors,
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
      </Switch>
    </Router>
  );
};

export default App;
