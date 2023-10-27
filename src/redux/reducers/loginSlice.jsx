import { createSlice } from "@reduxjs/toolkit";


const initialState={
    user:null,
    isVerified:false,
}

const userSlice=createSlice({
    name:"Api",
    initialState,
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