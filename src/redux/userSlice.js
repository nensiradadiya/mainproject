import { createSlice } from "@reduxjs/toolkit";

const userSlice=createSlice({
    name:"user",
    initialState:{users:[]},//state thi users access kari sakiye
    reducers:{
        ADD_USER(state,action){//user ne access karva mate state che...and action view thi ave,action thi reducer ne male
           
        },
        REMOVE_USER:(state,action)=>{},
        REMOVE_ALL_USERS(state,action){}
    }//je name reducer nu hoi tej action nu hoi


})
console.log(userSlice.actions)

export default userSlice