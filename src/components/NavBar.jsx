import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useCart } from "../context/CartContext";
import { Container, Nav, Navbar, Button } from 'react-bootstrap';

const Navbarra = () => {
  const { cart } = useCart();
  const total = cart.reduce((acc, item) => acc + item.price * item.count, 0);
  const [token, setToken] = useState(null);

  useEffect(() => {
    const storedToken = localStorage.getItem('token');
    setToken(storedToken); 
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('token');  
    setToken(null); 
  };

  const handleLogin = () => {
    localStorage.setItem('token', 'some-auth-token'); 
    setToken('some-auth-token');  
  };

  return (
    <Navbar bg="dark" variant="dark" collapseOnSelect expand="lg" fixed="top">
      <Container>
        <Navbar.Brand as={Link} to="/">Pizzería Mamma Mía</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/">
              <Button variant="outline-light">🍕Home</Button>
            </Nav.Link>

            {/* btn redirige a /profile cuando hay un token */}
            <Nav.Link as={Link} to={token ? "/profile" : "/login"}>
              <Button variant="outline-light">
                {token ? "🔓 Profile" : "🔐 Login"}
              </Button>
            </Nav.Link>

            <Nav.Link as={Link} to={token ? "/#logout" : "/register"}>
              <Button variant="outline-light" onClick={token ? handleLogout : handleLogin}>
                {token ? "🔒 Logout" : "🔐 Register"}
              </Button>
            </Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link as={Link} to="/cart">
              <Button variant="outline-warning">🛒 Ir al Carrito</Button>
            </Nav.Link>
             <Button  variant="outline-warning">🛒 ${total.toLocaleString("es-CL")}</Button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navbarra;
