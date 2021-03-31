import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  asset: [],
  assignedAssets: [],
  unassignedAssets: [],
  location: [],
  loading: false,
};

const assetSlice = createSlice({
  name: "asset",
  initialState,
  reducers: {
    setAssets(state, { payload }) {
      state.asset = payload;
      state.loading = false;
    },
    setAssignedAssets(state, { payload }) {
      state.assignedAssets = payload;
      state.loading = false;
    },
    setUnassignedAssets(state, { payload }) {
      state.unassignedAssets = payload;
      state.loading = false;
    },
    setLocation(state, { payload }) {
      state.location = payload;
      state.loading = false;
    },
  },
});

export const getAssets = createAsyncThunk("asset/getAssets", async (_, { dispatch }) => {
  try {
    const response = await axios.get(`/assets`);
    const data = response.data.data;
    dispatch(setAssets(data));
  } catch (error) {
    console.log(error.response.data);
    if (!error.response) throw error;
  }
});

export const getAssigned = createAsyncThunk(
  "asset/getAssignedAssets",
  async (_, { dispatch }) => {
    try {
      const response = await axios.get(`/assign-asset`);
      const data = response.data.data;
      console.log(data);
      dispatch(setAssignedAssets(data));
    } catch (error) {
      console.log(error.response.data);
      if (!error.response) throw error;
    }
  }
);

export const getUnassigned = createAsyncThunk(
  "asset/getUnassignedAssets",
  async (_, { dispatch }) => {
    try {
      const response = await axios.get(`/notification/unassigned`);
      const data = response.data.data;
      console.log(data);
      dispatch(setUnassignedAssets(data));
    } catch (error) {
      console.log(error.response.data);
      if (!error.response) throw error;
    }
  }
);
export const getLocation = createAsyncThunk(
  "asset/getLocation",
  async (_, { dispatch }) => {
    try {
      const response = await axios.get(`/locations`);
      const data = response.data.data;
      console.log(data);
      dispatch(setLocation(data));
    } catch (error) {
      console.log(error.response.data);
      if (!error.response) throw error;
    }
  }
);

export const {
  setAssets,
  setAssignedAssets,
  setUnassignedAssets,
  setLocation,
} = assetSlice.actions;
export default assetSlice.reducer;
