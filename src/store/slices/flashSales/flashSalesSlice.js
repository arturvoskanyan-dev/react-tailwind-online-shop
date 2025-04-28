import { createSlice } from "@reduxjs/toolkit"
import { flashSalesAPI } from "./flashSalesAPI";

const initialState = {
    flashSales: []
}

const flashSalesSlice = createSlice({
    name: "flashSales",
    initialState,
    reducers: {},
    extraReducers: (build) => {
        build
        .addCase(flashSalesAPI.fulfilled, (state, action) => {
            state.flashSales = action.payload
        })
    } 
})

export default flashSalesSlice.reducer;