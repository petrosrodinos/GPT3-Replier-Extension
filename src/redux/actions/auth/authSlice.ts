import { createSlice } from "@reduxjs/toolkit";
import { User } from "../../../types/user";
import {
  FREE_REQUESTS,
  SAVED_REVIEWS,
  DEFAULT_TAGS,
} from "../../../utils/constants";

const initialState: User = {
  uid: "",
  displayName: "",
  email: "",
  photoURL: "",
  isLoggedIn: false,
  tags: DEFAULT_TAGS,
  userEntered: false,
  plan: {
    requests: FREE_REQUESTS,
    savedReviews: SAVED_REVIEWS,
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
      state.plan = action.payload.plan;
      state.tags = action.payload.tags;
      state.userEntered = true;
    },
    logout: (state) => {
      state.isLoggedIn = false;
      state.displayName = "";
      state.email = "";
      state.photoURL = "";
      state.uid = "";
      state.plan = {};
      state.tags = DEFAULT_TAGS;
      state.userEntered = false;
    },
  },
  extraReducers: (builder) => {},
});

export const { login, logout } = authSlice.actions;
export default authSlice.reducer;
