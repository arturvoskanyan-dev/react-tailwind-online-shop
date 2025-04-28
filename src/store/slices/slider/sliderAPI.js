import { createAsyncThunk } from "@reduxjs/toolkit";
import { API } from "../../../api/api";

export const sliderAPI = createAsyncThunk(
    "get/slider_image",
    async() => {
        const response = await API.getSliderImage();
        const data = response.map((r) => r.data);
        return data
    }
)