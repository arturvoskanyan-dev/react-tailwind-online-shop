import { Routes, Route } from 'react-router-dom'
import Layout from "./components/Layout/Layout"
import { Home, Product, Basket, Category } from "./pages/index"
import { createContext, useEffect, useReducer } from 'react'
import { initState, reducer } from "./store/store"
import { API } from "./api/api"
import { useDispatch, useSelector } from 'react-redux'
import { flashSalesAPI } from './store/slices/flashSales/flashSalesAPI'
import './App.css'

export const MyContext = createContext(null)

function App({ categoriesList, footerData }) {
  const [state, dispatch] = useReducer(reducer, initState);
  const {flashSales} = useSelector((state) => state.flashSales);
  const dispatchh = useDispatch()

  useEffect(() => {
    API.getSliderImage(dispatch)
    dispatchh(flashSalesAPI())
  }, [])

  const buy = (product) => {
    dispatch({ type: "buy", payload: product })
  }

  const changeTheme = () => {
    dispatch({type : "theme", payload : state.theme})
  }

  return (
    <section className={`${state.theme === "dark" && "bg-dark-bg text-white"}`}>
      <MyContext.Provider value={{ footerData, buy, theme : state.theme, changeTheme }}>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home images={state.home?.slider} flashSales={flashSales} categoriesList={categoriesList} />} />
            <Route path='/product/:id' element={<Product theme={state.theme} />} />
            <Route path='/basket' element={<Basket />} />
            <Route path='/category/:name' element={<Category theme={state.theme} />} />
          </Route>
        </Routes>
      </MyContext.Provider>
    </section>
  )
}

export default App
