import React from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';

import Navbarra from './components/NavBar';
import Cart from './pages/Cart';
import Home from './pages/Home';
import Register from './pages/Register';
import Login from './pages/Login';
import Pizza from './pages/Pizza';
import Profile from './pages/Profile';
import NotFound from './pages/NotFound';
import Footer from './components/Footer';

import { useUser } from './context/UserContext';

// 🔹 Rutas protegidas
const PrivateRoute = ({ element }) => {
  const { token } = useUser();
  return token ? element : <Navigate to="/login" />;
};

// 🔹 Rutas públicas
const PublicRoute = ({ element }) => {
  const { token } = useUser();
  return token ? <Navigate to="/profile" /> : element;
};

function App() {
  return (
    <div className="App">
      <Navbarra />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/pizza/:id" element={<Pizza />} />

        {/* Rutas protegidas */}
        <Route path="/profile" element={<PrivateRoute element={<Profile />} />} />

        {/* Rutas públicas */}
        <Route path="/login" element={<PublicRoute element={<Login />} />} />
        <Route path="/register" element={<PublicRoute element={<Register />} />} />

        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;