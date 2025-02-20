import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { CartProvider } from './context/CartContext.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import App from './App.jsx'
import { UserProvider } from './context/UserContext.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
    <UserProvider>
    <CartProvider>
     <App />
    </CartProvider>
    </UserProvider>
    </BrowserRouter>
  </StrictMode>,
)
