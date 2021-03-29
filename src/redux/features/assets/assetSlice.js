import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const baseURL = "http://asset-register.hasob.ng/api/v1";

const initialState = {
  assets: {
    name: "",
    category: "",
    quantity: "",
    location: "",
  },
};

// const assetSlice = createSlice({
//   name: "asset",
//   initialState,
//   reducers: {
//     setAssets(state, {allAssets}) {
//         state.assets= allAssets;
//     },
// },
// });

export const getAssets = createAsyncThunk("asset/getAssets", async (_, { dispatch }) => {
  try {
    const response = await axios.get(`${baseURL}/assets`);
    console.log({ response });
  } catch (error) {
    console.log({ error });
  }
});
