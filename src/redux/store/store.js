import { configureStore } from "@reduxjs/toolkit";
import loginSlice from "../reducers/loginSlice";

const store = configureStore({
  reducer: loginSlice,
  middleware: (applyMiddleware) => applyMiddleware(),
});

export const {dispatch}=store

export default store;