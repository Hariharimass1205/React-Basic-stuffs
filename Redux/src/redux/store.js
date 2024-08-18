
import { configureStore } from '@reduxjs/toolkit';
import  counterReducer from "./userSlice";

export const Store = configureStore({
    reducer:{
        counter:counterReducer
    }
})



