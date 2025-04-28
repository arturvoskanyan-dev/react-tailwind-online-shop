import { createSlice } from "@reduxjs/toolkit"
import { categoryAPI } from "./categoryAPI"

const initialState = {
    category: []
}

const categorySlice = createSlice({
    name: "categorySlice",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
        .addCase(categoryAPI.fulfilled, (state, action) => {
            state.category = action.payload;
        })
    }
})

export default categorySlice.reducer;