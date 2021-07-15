import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    cars: ["Model S", "Model 3", "Model X", "Model Y", "Solar Roof", "Solar Panels" ]
};

const carSlice = createSlice({
    name: 'car',
    initialState,
    reducers: {

    }
})

export const carActions = carSlice.actions;

export default carSlice.reducer