import { combineReducers } from "redux";
import loginSlice from "./loginSlice";

const rootReducer = combineReducers({
  loginSlice
});

export default rootReducer;