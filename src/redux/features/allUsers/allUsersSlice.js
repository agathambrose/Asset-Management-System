// @ts-nocheck
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

//Add User
export const addUser = createAsyncThunk("allUsers/addUser", async user => {
  try {
    const res = await axios.post("/users", user);
    console.log(res);
    return res;
  } catch (error) {
    console.log(error);
  }
});

// Fetch All Users
export const getAllUsers = createAsyncThunk("allUsers/getAllUsers", async () => {
  try {
    const response = await axios.get("/users");
    const { data } = response.data;
    console.log(data);
    return data;
  } catch (error) {
    if (!error.response) throw error;
  }
});

// //Edit User
// export const editUser = createAsyncThunk(
//   "allUsers/editUser", async (id) => {
//   try {
//     const res = await axios.patch(`/users/${id}`);
//     console.log(res);
//     return res;
//   } catch (error) {
//     console.log(error);
//   }
// });

// // Disable User
// export const disableUser = createAsyncThunk(
//   "allUsers/disableUser", async (id) => {
//   try {
//     const res = await axios.patch(`/users/${id}/disable`);
//     console.log(res);
//     return res;
//   } catch (error) {
//     console.log(error);
//   }
// });

const allUsersSlice = createSlice({
  name: "allUsers",
  initialState: {
    users: [],
  },
  reducers: {
    editUser: () => {},
    deleteUser: (state, { payload }) => {
      return (state = state.filter(({ id }) => id !== payload));
    },
    disableUser: () => {},
  },
  extraReducers: {
    [getAllUsers.fulfilled]: (state, { payload: users }) => {
      state.users = users;
    },
  },
});

export const editUserData = id => async dispatch => {
  try {
    axios.patch(`/users/${id}`);
    dispatch(editUserData());
  } catch (error) {
    console.log(error);
  }
};

export const deleteUserData = id => async dispatch => {
  try {
    await axios.delete(`/users/${id}`);
    dispatch(deleteUser(id));
  } catch (error) {
    console.log(error);
  }
};

export const disableUserData = () => async dispatch => {
  try {
  } catch (error) {}
};

export const { editUser, deleteUser, disableUser } = allUsersSlice.actions;
export default allUsersSlice.reducer;
