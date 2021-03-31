import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./features/user/userSlice";
import assetReducer from "./features/assets/assetSlice";
import allUsersReducer from "./features/allUsers/allUsersSlice";

const store = configureStore({
  reducer: {
    user: userReducer,
    allUsers: allUsersReducer,
    asset: assetReducer,
  },
  // devTools: false
});

export default store;
