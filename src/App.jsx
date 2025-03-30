import { Routes, Route } from 'react-router-dom'
import Layout from "./components/Layout/Layout"
import { Home, Product } from "./pages/index"
import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [flashSales, setFlashSales] = useState([]);

  useEffect(() => {
    fetch(`https://dummyjson.com/products/search?q=phone&limit=4`)
      .then(res => res.json())
      .then((res) => setFlashSales(res.products));
  }, [])

  return (
    <section className=''>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home flashSales={flashSales} />} />
          <Route path='/product/:id' element={<Product />} />
        </Route>
      </Routes>
    </section>
  )
}

export default App
