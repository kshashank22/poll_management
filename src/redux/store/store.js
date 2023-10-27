import { configureStore } from "@reduxjs/toolkit";
import loginSlice from "../reducers/loginSlice";
import thunk from "redux-thunk";

const store = configureStore({
  reducer: loginSlice,
  middleware: (applyMiddleware) => applyMiddleware(thunk),
});

export default store;