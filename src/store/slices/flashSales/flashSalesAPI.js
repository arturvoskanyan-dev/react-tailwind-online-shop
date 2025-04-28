import { createAsyncThunk } from "@reduxjs/toolkit";
import { API } from "../../../api/api";

export const flashSalesAPI = createAsyncThunk(
    "get/flashSales",
    async() => {
        const response = await API.getFlashSales();
        return response.data.products
    }
)