import { createSlice } from "@reduxjs/toolkit"
import { sliderAPI } from "./sliderAPI";

const initialState = {
    sliderImage: []
}

const sliderSlice = createSlice({
    name: "sliderSlice",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
        .addCase(sliderAPI.fulfilled, (state, action) => {
            state.sliderImage = action.payload;
        })
    }
})

export default sliderSlice.reducer;