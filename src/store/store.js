const initState = {
    basket : JSON.parse(localStorage.getItem("data")) || [],
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

        default :
            return state
    }
}

export {initState, reducer}