import { Routes, Route } from 'react-router-dom'
import Layout from "./components/Layout/Layout"
import { Home, Product, Basket, Category } from "./pages/index"
import { createContext, useEffect, useRef, useState } from 'react'
import './App.css'

export const MyContext = createContext(null)

function App({ categoriesList, footerData }) {
  const [flashSales, setFlashSales] = useState([]);
  const [theme, setTheme] = useState("light");
  const basketRef = useRef(null)

  useEffect(() => {
    fetch(`https://dummyjson.com/products/search?q=phone&limit=4`)
      .then(res => res.json())
      .then((res) => setFlashSales([...res.products.map((elem) => ({ ...elem, count: 1 }))]))
  }, [])

  const buy = (product) => {
    basketRef.current = JSON.parse(localStorage.getItem("data")) || [];

    let updatedBasket = basketRef.current.map((elem) => {
      return elem.id === product.id ? { ...elem, count: elem.count + product.count } : elem
    })

    if (!basketRef.current.some(elem => elem.id === product.id)) {
      updatedBasket = [...updatedBasket, { ...product }]
    }

    localStorage.setItem("data", JSON.stringify(updatedBasket))
  }

  const changeTheme = () => {
    setTheme(prev => prev === "light" ? "dark" : "light")
  }

  return (
    <section className={`${theme === "dark" && "bg-dark-bg text-white"}`}>
      <MyContext.Provider value={{ footerData, buy, theme, changeTheme }}>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home flashSales={flashSales} categoriesList={categoriesList} />} />
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
