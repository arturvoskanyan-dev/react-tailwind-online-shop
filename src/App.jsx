import { Routes, Route } from 'react-router-dom'
import Layout from "./components/Layout/Layout"
import { Home, Product, Basket, Category } from "./pages/index"
import { createContext, useEffect, useReducer } from 'react'
import { initState, reducer } from "./store/store"
import { useDispatch, useSelector } from 'react-redux'
import { flashSalesAPI } from './store/slices/flashSales/flashSalesAPI'
import { sliderAPI } from './store/slices/slider/sliderAPI'
import './App.css'

export const MyContext = createContext(null)

function App({ categoriesList, footerData }) {
  const [state, dispatch] = useReducer(reducer, initState);
  const {flashSales} = useSelector((state) => state.flashSales);
  const {sliderImage} = useSelector((state) => state.slider)
  const myDispatch = useDispatch()

  useEffect(() => {
    myDispatch(sliderAPI())
    myDispatch(flashSalesAPI())
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
            <Route index element={<Home images={sliderImage} flashSales={flashSales} categoriesList={categoriesList} />} />
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
