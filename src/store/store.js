const initState = {
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
        default :
            return state
    }
}

export {initState, reducer}