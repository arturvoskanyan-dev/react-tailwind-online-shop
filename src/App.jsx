import { Routes, Route } from 'react-router-dom'
import Layout from "./components/Layout/Layout"
import './App.css'

function App() {
  return (
    <section>
      <Routes>
        <Route path="/" element={<Layout />}>
        </Route>
      </Routes>
    </section>
  )
}

export default App
