import { configureStore } from "@reduxjs/toolkit";
import carReducer from './CarSlice.js';

const store = configureStore({
    reducer: carReducer
})

export default store