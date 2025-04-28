import { createAsyncThunk } from "@reduxjs/toolkit";
import { API } from "../../../api/api";

export const categoryAPI = createAsyncThunk(
    "get/category",
    async(name) => {
        const response = await API.getCategory(name);
        return response.data.products
    }
)