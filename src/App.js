import { Router, Route, Switch, Redirect } from "react-router-dom";
import { SignIn, SignUp } from "./pages";
import AllAssetsPage from "./pages/AllAssetsPage";
import AssignedAssetsPage from "./pages/AssignedAssetsPage";
import LocationPage from "./pages/LocationPage";
import UnassignedAssetsPage from "./pages/UnassignedAssetsPage";
import Vendors from "./pages/Vendors";
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
        <Route path="/allAssets" component={AllAssetsPage} />
        <Route path="/assignedAssets" component={AssignedAssetsPage} />
        <Route path="/unassignedAssets" component={UnassignedAssetsPage} />
        <Route path="/location" component={LocationPage} />
      </Switch>
    </Router>
  );
};

export default App;
