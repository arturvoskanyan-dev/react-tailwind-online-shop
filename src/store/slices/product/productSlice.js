import { createSlice } from "@reduxjs/toolkit"
import { productAPI } from "./productAPI";

const initialState = {
    product: {}
}

const productSlice = createSlice({
    name: "productSlice",
    initialState,
    reducers: {
        increment(state) {
            state.product.count++
        },
        decrement(state) {
            state.product.count > 1 && state.product.count--
        } 
    },
    extraReducers: (build) => {
        build
        .addCase(productAPI.fulfilled, (state, action) => {
            state.product = action.payload;
        })
    }
})

export const {increment, decrement} = productSlice.actions;
export default productSlice.reducer;