import { configureStore } from "@reduxjs/toolkit"
import flashSalesSlice from "./slices/flashSales/flashSalesSlice";


const store = configureStore({
    reducer: {
        flashSales: flashSalesSlice
    }
})

export default store;

const initState = {
    basket : JSON.parse(localStorage.getItem("data")) || [],
    theme : "light",
    product : {},
    stars: [],
    category: [],
    home : {
        flashSales : [],
        slider : []
    }
}

const reducer = (state, action) => {
    switch(action.type) {
        case "api_flashSales":
            return {
                ...state,
                home : {
                    ...state.home,
                    flashSales : action.payload
                }
            }

        case "api_slider":
            return {
                ...state, 
                home : {
                    ...state.home,
                    slider: action.payload
                }
            }

        case "api_product": {
            return {
                ...state,
                product: action.payload
            }
        }

        case "api_category": {
            return {
                ...state,
                category: action.payload
            }
        }

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

        case "inc_product": {
            return {
                ...state,
                product : {
                    ...state.product,
                    count : ++action.payload
                }
            }
        }

        case "dec_product": {
            return {
                ...state,
                product : {
                    ...state.product,
                    count : action.payload > 1 ? --action.payload : action.payload
                }
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