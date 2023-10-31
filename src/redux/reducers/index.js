import { combineReducers } from "redux";
import loginSlice from "./loginSlice";
import signupSlice from "./signupSlice";

const rootReducer = combineReducers({
  loginSlice:loginSlice,
  signupSlice:signupSlice,
});

export default rootReducer;