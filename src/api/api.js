import axios from "axios";

const instance = axios.create({
    baseURL: "https://dummyjson.com/products"
})

export const API = {
    getFlashSales() {
        return instance.get(`/search?q=phone&limit=4`)
    },

    getSliderImage() {
        return Promise.all([
            instance.get(`/99?select=thumbnail,title`),
            instance.get(`/93?select=thumbnail,title`),
            instance.get(`/79?select=thumbnail,title`),
            instance.get(`/193?select=thumbnail,title`),
          ])
    },

    getProduct(id) {
        return instance.get(`/${id}`)
    },

    getCategory(name) {
        return instance.get(`/category/${name}`)
    }
}