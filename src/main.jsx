import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import App from './App.jsx'
import Product from './Product.jsx'
createRoot(document.getElementById('root')).render(
  <BrowserRouter>
  
  <Routes>
    <Route  path='/' element= {<App />}/>
    <Route  path='/product/:id' element= {<Product />}/>
  </Routes>
  </BrowserRouter>
)
