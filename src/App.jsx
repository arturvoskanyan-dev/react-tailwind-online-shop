import { Routes, Route } from 'react-router-dom'
import Layout from "./components/Layout/Layout"
import { Home, Product, Basket, Category } from "./pages/index"
import { createContext, useEffect, useReducer, useState } from 'react'
import { initState, reducer } from "./store/store"
import { API } from "./api/api"
import './App.css'

export const MyContext = createContext(null)

function App({ categoriesList, footerData }) {
  const [state, dispatch] = useReducer(reducer, initState);
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    API.getFlashSales(dispatch)
    API.getSliderImage(dispatch)
  }, [])

  const buy = (product) => {
    dispatch({ type: "buy", payload: product })
  }

  const changeTheme = () => {
    setTheme(prev => prev === "light" ? "dark" : "light")
  }

  return (
    <section className={`${theme === "dark" && "bg-dark-bg text-white"}`}>
      <MyContext.Provider value={{ footerData, buy, theme, changeTheme }}>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home images={state.home?.slider} flashSales={state.home?.flashSales} categoriesList={categoriesList} />} />
            <Route path='/product/:id' element={<Product theme={theme} />} />
            <Route path='/basket' element={<Basket />} />
            <Route path='/category/:name' element={<Category theme={theme} />} />
          </Route>
        </Routes>
      </MyContext.Provider>
    </section>
  )
}

export default App
