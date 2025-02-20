import React, { useContext } from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'
import Navbarra  from './components/NavBar'
import Cart from './pages/Cart'
import Home from './pages/Home'
import Register from './pages/Register'
import Login from './pages/Login'
import Pizza from './pages/Pizza'
import Profile from './pages/Profile'
import UserContext, { useUser }  from './context/UserContext';
import NotFound from './pages/NotFound'
import Footer from './components/Footer'


function App() {
  const { token } = useUser();

  return (
    <div className="App">
      <Navbarra />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/pizza/:id" element={<Pizza />} />
        <Route path="/login" 
          element={token ? <Navigate to="/" /> : <Login />} 
        />
        <Route path="/register" 
          element={token ? <Navigate to="/" /> : <Register />} 
        />
        <Route path="/profile" 
          element={token ? <Profile /> : <Navigate to="/login" />} 
        />
        <Route path="*" element={<NotFound />} />
        
      </Routes>
      <Footer />
    </div>
  )
}

export default App