import { configureStore } from "@reduxjs/toolkit"
import flashSalesSlice from "./slices/flashSales/flashSalesSlice";
import sliderSlice from "./slices/slider/sliderSlice";
import categorySlice from "./slices/category/categorySlice";
import productSlice from "./slices/product/productSlice";

const store = configureStore({
    reducer: {
        flashSales: flashSalesSlice,
        slider: sliderSlice,
        category: categorySlice,
        product: productSlice
    }
})

export default store;

const initState = {
    basket : JSON.parse(localStorage.getItem("data")) || [],
    theme : "light",
}

const reducer = (state, action) => {
    switch(action.type) {
        case "buy": {
            const product = action.payload;
            let updatedBasket = state.basket.map((elem) => {
                return elem.id === product.id ? { ...elem, count: elem.count + action.payload.count } : elem
            })

            if (!state.basket.some(elem => elem.id === product.id)) {
                updatedBasket = [...updatedBasket, { ...product }]
            }

            localStorage.setItem("data", JSON.stringify(updatedBasket))

            return {
                ...state,
                basket: updatedBasket
            }
        }

        case "theme": {
            return {
                ...state,
                theme : action.payload === "light" ? "dark" : "light"
            }
        }

        default :
            return state
    }
}

export {initState, reducer}