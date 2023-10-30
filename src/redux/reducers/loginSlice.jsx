import { createSlice } from "@reduxjs/toolkit";
import { instance } from "../../utilities";

const initialState = {
  user: null,
  isVerified: false,
};

export const signup = async (username, password) => {
  try {
    const response = await instance.post(
      `add_user?username=admin&password=admin&role=admin`,
      {
        username,
        password,
      }
    );
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const login = async (username, password) => {
  try {
    const response = await instance.post(
      `login?username=admin&password=admin`,
      {
        username,
        password,
      }
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
