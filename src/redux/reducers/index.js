import { combineReducers } from "redux";
import loginSlice from "./loginSlice";
import signupSlice from "./signupSlice";
import pollSlice from "./pollSlice";
import eachPollSlice from "./eachPollSlice";
import optionsSlice from "./optionsSlice";
import deleteOptionSlice from "./deleteOptionSlice";
import addPollSlice from "./addPollSlice";

const rootReducer = combineReducers({
  loginSlice: loginSlice,
  signupSlice: signupSlice,
  pollSlice: pollSlice,
  eachPollSlice: eachPollSlice,
  optionsSlice: optionsSlice,
  deleteOptionSlice:deleteOptionSlice,
  addPollSlice:addPollSlice,
});

export default rootReducer;
