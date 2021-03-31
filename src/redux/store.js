import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./features/user/userSlice";
import assetReducer from "./features/assets/assetSlice";
const store = configureStore({
  reducer: { user: userReducer, asset: assetReducer },
  // devTools: false
});

export default store;
