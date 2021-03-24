import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./index.css";

import { Provider } from "react-redux";
import store from "./redux/store";
import { setAuthToken, setBaseUrl } from "./utils";
import { setCurrentUser } from "./redux/features/user/userSlice";

setBaseUrl("http://asset-register.hasob.ng/api/v1");

if (localStorage.jwtToken && localStorage.currentUser) {
  setAuthToken(localStorage.jwtToken);
  store.dispatch(setCurrentUser(JSON.parse(localStorage.currentUser)));
}

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
