import axios from "axios";

const instance = axios.create({
    baseURL: "https://dummyjson.com/products"
})

export const API = {
    getFlashSales() {
        return instance.get(`/search?q=phone&limit=4`)
    },

    getSliderImage(dispatch) {
        Promise.all([
            instance.get(`/99?select=thumbnail,title`),
            instance.get(`/93?select=thumbnail,title`),
            instance.get(`/79?select=thumbnail,title`),
            instance.get(`/193?select=thumbnail,title`),
          ]).then(responses => {
            const data = responses.map(response => response.data);
            dispatch({ type: "api_slider", payload: data });
          })
    },

    getProduct(dispatch, id) {
        instance.get(`/${id}`)
            .then(res => dispatch({type : "api_product", payload : { ...res.data, count: 1 }}));
    },

    getCategory(dispatch, name) {
        instance.get(`/category/${name}`)
            .then((res) => dispatch({type : "api_category", payload : res.data.products}))
    }
}