import { createSlice } from "@reduxjs/toolkit";
import axiosInstance from "../../utilities/axios";
import { dispatch } from "../store/store";

const initialState = {
  isLoading: false,
  isSuccess: false,
  isError: false,
  data: {},
};

const addPollSlice = createSlice({
  name: "addPoll",
  initialState,
  reducers: {
    startLoading(state) {
      state.isLoading = true;
      state.isError = false;
    },
    loginSuccess(state, action) {
      state.isLoading = false;
      state.isError = false;
      state.isSuccess = true;
      state.data = { ...action.payload };
    },
    hasError(state, action) {
      state.isError = true;
      state.isLoading = false;
      state.isSuccess = false;
      state.data = { ...action.payload };
    },
    resetReducer(state) {
      state.isError = false;
      state.isLoading = false;
      state.isSuccess = false;
      state.data = {};
    },
  },
});

export function addPoll(newTitle,newOptions) {
  return async () => {
    dispatch(addPollSlice.actions.startLoading());
    try {
      const response = await axiosInstance.post(
        `add_poll?title=${newTitle}&options=${newOptions.map((each)=>each.option)}`,
        { newTitle,newOptions }
      );
      dispatch(addPollSlice.actions.loginSuccess(response.data));
    } catch (e) {
      dispatch(addPollSlice.actions.hasError(e));
    }
  };
}

export const { startLoading, hasError, loginSuccess, resetReducer } =
  addPollSlice.actions;
export default addPollSlice.reducer;
