export const API = {
    getFlashSales(dispatch) {
        fetch(`https://dummyjson.com/products/search?q=phone&limit=4`)
            .then(res => res.json())
            .then((res) => dispatch({type : "api_flashSales", payload : [...res.products.map((elem) => ({ ...elem, count: 1 }))]
        }))
    },

    getSliderImage(dispatch) {
        Promise.all([
            fetch(`https://dummyjson.com/products/99?select=thumbnail,title`),
            fetch(`https://dummyjson.com/products/93?select=thumbnail,title`),
            fetch(`https://dummyjson.com/products/79?select=thumbnail,title`),
            fetch(`https://dummyjson.com/products/193?select=thumbnail,title`),
          ]).then((res) => Promise.all(res.map(r => r.json())))
            .then((res) => dispatch({type : "api_slider", payload : res
        }))
    },

    getProduct(dispatch, id) {
        fetch(`https://dummyjson.com/products/${id}`)
            .then(res => res.json())
            .then(res => dispatch({type : "api_product", payload : { ...res, count: 1 }}));
    },

    getCategory(dispatch, name) {
        fetch(`https://dummyjson.com/products/category/${name}`)
            .then(res => res.json())
            .then((res) => dispatch({type : "api_category", payload : res.products}))
    }
}