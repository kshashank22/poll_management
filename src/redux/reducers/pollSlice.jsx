import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axiosInstance from "../../utilities/axios";


const initialState = { list: [], status: "idle", error: null };

export const fetchedData = createAsyncThunk("api", async () => {
  const response = await axiosInstance.get('list_polls')
  const result = await response.data;
  return result;
});

const pollSlice = createSlice({
  name: "pollList",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchedData.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchedData.fulfilled, (state, action) => {
        state.status = "success";
        state.list = action.payload.data;
      })
      .addCase(fetchedData.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export default pollSlice.reducer;