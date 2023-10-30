import { createSlice } from "@reduxjs/toolkit";
import { axiosInstance } from "../../utilities";

const initialState = {
  user: null,
  isVerified: false,
};

export const signup = async (username, password, admin) => {
  try {
    const response = await axiosInstance.post(
      `https://etechpolltesting.onrender.com/add_user?username=${username}&password=${password}&role=${admin}`
    );
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const login = async (username, password) => {
  try {
    const response = await axiosInstance.post(
      `https://etechpolltesting.onrender.com/login?username=${username}&password=${password}`
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

export const { verifiedUser, nonVerifiedUser } = userSlice.actions;
export default userSlice.reducer;
