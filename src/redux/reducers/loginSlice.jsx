import { createSlice } from "@reduxjs/toolkit";
import axiosInstance from "../../utilities/axios";

const initialState = {
  user: null,
  isVerified: false,
};

export const signup = async (username, password, admin) => {
  try {
    const response = await axiosInstance.post(
      `add_user?username=${username}&password=${password}&role=${admin}`
    );
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const login = async (username, password) => {
  try {
    const response = await axiosInstance.post(
      `login?username=${username}&password=${password}`
    );
    return response.data;
  } catch (error) {
    throw error;
  }
};



const userSlice = createSlice({
  name: "Api",
  initialState,
  reducers: {
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

export const { verifiedUser, nonVerifiedUse } = userSlice.actions;
export default userSlice.reducer;
