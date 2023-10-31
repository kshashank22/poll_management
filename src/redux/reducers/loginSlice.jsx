import { createSlice } from "@reduxjs/toolkit";
import axiosInstance from "../../utilities/axios";

const initialState = {
  isLoading: false,
  isSuccess: false,
  isError: false,
  data: {},
  user: null,
  isVerified: false,
};

const userSlice = createSlice({
  name: "login",
  initialState: initialState,
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
    verifiedUser: (state, action) => {
      state.user = action.payload;
      state.isVerified = true;
    },
    nonVerifiedUser: (state) => {
      state.user = null;
      state.isVerified = false;
    },
  },
});

export const signup = async (payload) => {
  try {
    const response = await axiosInstance.post(
      `add_user?username=${payload.username}&password=${payload.password}&role=${payload.role}`
    );
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const {
  verifiedUser,
  nonVerifiedUse,
  startLoading,
  hasError,
  loginSuccess,
} = userSlice.actions;
export default userSlice.reducer;
