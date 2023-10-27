import { createSlice } from "@reduxjs/toolkit";
import { details } from "../actions/constants";
const userSlice=createSlice({
    name:"Api",
    details,
    reducers:{
        verifiedUser:(state,action)=>{
            state.user=action.payload;
            state.isVerified=true;
        },
        nonVerifiedUser:(state)=>{
            state.user=null;
            state.isVerified=false;
        },
    },
})

export const {verifiedUser,nonVerifiedUser}=userSlice.actions;
export default userSlice.reducer