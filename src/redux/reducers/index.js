import { combineReducers } from "redux";
import loginSlice from "./loginSlice";
import signupSlice from "./signupSlice";
import pollSlice from "./pollSlice";
import eachPollSlice from "./eachPollSlice";

const rootReducer = combineReducers({
  loginSlice: loginSlice,
  signupSlice: signupSlice,
  pollSlice: pollSlice,
  eachPollSlice: eachPollSlice,
});

export default rootReducer;
