import { useState } from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'
import Navbarra  from './components/NavBar'
//import Cart from './components/Cart'
//import Home from './components/Home'
//import RegisterForm from './components/Register'
//import LoginPage from './components/Login'
import Pizza from './components/Pizza'
import Footer from './components/Footer'

function App() {
  const [showRegister, setShowRegister] = useState(true);

  return (
    <div>
      <Navbarra />
      {/*<Cart/>*/}
       <div className="container mt-4">
        {showRegister ? (
          <div className= "registerform d-flex justify-content-center align-items-center flex-column">
            {/*<RegisterForm />*/}
            {/*<button className="sing-in j" onClick={() => setShowRegister(false)}>
              ¿Ya tienes una cuenta? Inicia sesión aquí
            </button>*/}
          </div>
        ) : (
          <div className= "loginform d-flex justify-content-center align-items-center flex-column">
            {/*<LoginPage />*/}
            {/*<button className="sing-up" onClick={() => setShowRegister(true)}>
              ¿No tienes una cuenta? Regístrate aquí
            </button>*/}
          </div>
        )}
      </div> 
      {/*<Home />*/}
      <Pizza />
      <Footer />
    </div>
  )
}

export default App