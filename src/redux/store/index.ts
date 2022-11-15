import { combineReducers, configureStore } from "@reduxjs/toolkit";
import AuthReducer from "../actions/auth/authSlice";

const reducers = combineReducers({
  auth: AuthReducer,
});

const store = configureStore({
  reducer: reducers,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false }),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
