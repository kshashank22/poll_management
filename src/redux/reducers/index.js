import { combineReducers } from "redux";
import loginSlice from "./loginSlice";
import signupSlice from "./signupSlice";
import pollSlice from "./pollSlice";

const rootReducer = combineReducers({
  loginSlice: loginSlice,
  signupSlice: signupSlice,
  pollSlice:pollSlice,
});

export default rootReducer;
