import { createSlice } from "@reduxjs/toolkit";
import { User } from "../../../types/user";
import {
  FREE_REQUESTS,
  SAVED_REPLIES,
  DEFAULT_TAGS,
} from "../../../utils/constants";

const initialState: User = {
  uid: "",
  displayName: "",
  email: "",
  photoURL: "",
  isLoggedIn: false,
  settings: {
    tags: DEFAULT_TAGS,
    replyFormat: "Review",
  },
  userEntered: false,
  plan: {
    requests: FREE_REQUESTS,
    savedReplies: SAVED_REPLIES,
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
      state.settings = action.payload.settings;
      state.userEntered = true;
    },
    logout: (state) => {
      state.isLoggedIn = false;
      state.displayName = "";
      state.email = "";
      state.photoURL = "";
      state.uid = "";
      state.plan = null;
      state.userEntered = false;
      state.settings = null;
    },
    updateSettings: (state, action) => {
      state.settings = action.payload;
    },
    updatePlan: (state, action) => {
      state.plan = action.payload;
    },
  },
  extraReducers: (builder) => {},
});

export const { login, logout, updateSettings, updatePlan } = authSlice.actions;
export default authSlice.reducer;
