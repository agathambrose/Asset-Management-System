import { createSlice } from "@reduxjs/toolkit";
import { history, setAuthToken } from "../../../utils";
import axios from "axios";

const initialState = {
  user: {
    id: null,
    first_name: null,
    middle_name: null,
    last_name: null,
    email: null,
    verified: null,
    phone: null,
    office: null,
    designation: null,
    bio: null,
    picture_url: null,
    roles: [],
  },
  isAuthenticated: false,
  signedUp: false,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setCurrentUser(state, { payload: currentUser }) {
      state.user = currentUser;
      state.isAuthenticated = true;
      state.signedUp = false;
    },
    setSignedUp(state, action) {
      state.signedUp = action.payload;
    },
    logoutCurrentUser() {
      return initialState;
    },
  },
});

export const login = user => async dispatch => {
  try {
    const res = await axios.post("/auth/login", user);
    const token = res.data.data.access_token;
    localStorage.setItem("jwtToken", token);
    setAuthToken(token);
    const currentUser = res.data.data.user;
    localStorage.setItem("currentUser", JSON.stringify(currentUser));
    dispatch(setCurrentUser(currentUser));
    history.push("/dashboard");
  } catch (error) {
    // console.log({ ...error });
    console.log(error.response.data);
    if (!error.response) throw error;
  }
};

export const signup = newUser => async dispatch => {
  try {
    const res = await axios.post("/auth/register", newUser);
    console.log(res);
    dispatch(setSignedUp(true));
    history.push("/verify-email");
  } catch (error) {
    // console.log({ ...error });
    console.log(error.response.data);
    if (!error.response) throw error;
  }
};

export const logout = () => dispatch => {
  localStorage.removeItem("jwtToken");
  localStorage.removeItem("currentUser");
  setAuthToken("");
  dispatch(logoutCurrentUser());
  history.push("/sign-in");
};

export const { setCurrentUser, setSignedUp, logoutCurrentUser } = userSlice.actions;
export default userSlice.reducer;
