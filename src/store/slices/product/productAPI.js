import { createAsyncThunk } from "@reduxjs/toolkit";
import { API } from "../../../api/api";

export const productAPI = createAsyncThunk(
    "get/product",
    async(id) => {
        const response = await API.getProduct(id);
        return { ...response.data, count: 1 }
    }
)