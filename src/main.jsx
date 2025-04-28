import { BrowserRouter } from 'react-router-dom'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { categoriesList, footerData } from "./data/data.js"
import { Provider } from 'react-redux'
import store from './store/store.js'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Provider store={store}>
      <App categoriesList={categoriesList} footerData={footerData} />
    </Provider>
  </BrowserRouter>
)
