import { BrowserRouter } from 'react-router-dom'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { categoriesList, footerData } from "./data/data.js"

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <App categoriesList={categoriesList} footerData={footerData} />
  </BrowserRouter>
)
