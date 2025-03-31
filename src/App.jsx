import { Routes, Route, useParams } from 'react-router-dom'
import Layout from "./components/Layout/Layout"
import { Home, Product, Basket, Category } from "./pages/index"
import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [flashSales, setFlashSales] = useState([]);

  useEffect(() => {
    fetch(`https://dummyjson.com/products/search?q=phone&limit=4`)
      .then(res => res.json())
      .then((res) => setFlashSales([...res.products.map((elem) => ({ ...elem, count: 1 }))]))
  }, [])

  const buy = (product) => {
    let basketData = JSON.parse(localStorage.getItem("data")) || [];
    let updatedBasket = basketData.map((elem) => {
      return elem.id === product.id ? { ...elem, count: elem.count + product.count } : elem
    })

    if (!basketData.some(elem => elem.id === product.id)) {
      updatedBasket = [...updatedBasket, { ...product }]
    }

    localStorage.setItem("data", JSON.stringify(updatedBasket))
  }

  return (
    <section>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home flashSales={flashSales} buy={buy} />} />
          <Route path='/product/:id' element={<Product buy={buy} />} />
          <Route path='/basket' element={<Basket />} />
          <Route path='/category/:name' element={<Category buy={buy} />} />
        </Route>
      </Routes>
    </section>
  )
}

export default App
