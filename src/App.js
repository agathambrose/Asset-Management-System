import { Router, Route, Switch, Redirect } from "react-router-dom";
import { SignIn, SignUp } from "./pages";
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
      </Switch>
    </Router>
  );
};

export default App;
