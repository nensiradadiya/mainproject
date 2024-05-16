import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./userSlice";

const store1= configureStore({//store1  ni jagya e game te lakhi sako
    reducer:{
        user:userSlice.reducer,
       
        
    }
})

export default store1