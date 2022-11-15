import { createSlice } from "@reduxjs/toolkit";
import { User } from "../../../types/user";
import { FREE_REQUESTS } from "../../../utils/constants";

const initialState: User = {
  uid: "",
  displayName: "",
  email: "",
  photoURL: "",
  requests: FREE_REQUESTS,
  isLoggedIn: false,
  preferences: {
    darkMode: false,
  },
};

export const authSlice = createSlice({
  name: "auth/user",
  initialState,
  reducers: {
    login: (state, action) => {
      state.uid = action.payload.uid;
      state.displayName = action.payload.displayName;
      state.email = action.payload.email;
      state.photoURL = action.payload.photoURL;
      state.isLoggedIn = true;
      state.preferences = action.payload.preferences;
      state.requests = action.payload.requests;
    },
    logout: (state) => {
      state.isLoggedIn = false;
      state.displayName = "";
      state.email = "";
      state.photoURL = "";
      state.uid = "";
      state.requests = FREE_REQUESTS;
    },
  },
  extraReducers: (builder) => {},
});

export const { login, logout } = authSlice.actions;
export default authSlice.reducer;
