import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from "../context/CartContext";
import { useUser } from '../context/UserContext';
import { Container, Nav, Navbar, Button } from 'react-bootstrap';

const Navbarra = () => {
  const { cart } = useCart();
  const { token, logout } = useUser();

  const total = cart.reduce((acc, item) => acc + item.price * item.count, 0);

  return (
    <Navbar bg="dark" variant="dark" collapseOnSelect expand="lg" fixed="top">
      <Container>
        <Navbar.Brand as={Link} to="/">Pizzería Mamma Mía</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto d-flex align-items-center">
            <Nav.Link as={Link} to="/">
              <Button variant="outline-light" className="navbar-btn">🍕 Home</Button>
            </Nav.Link>

            <Nav.Link as={Link} to={token ? "/profile" : "/login"}>
              <Button variant="outline-light" className="navbar-btn">
                {token ? "🔓 Profile" : "🔐 Login"}
              </Button>
            </Nav.Link>

            {token ? (
              <Nav.Link>
                <Button variant="outline-light" className="navbar-btn" onClick={logout}>
                  🔒 Logout
                </Button>
              </Nav.Link>
            ) : (
              <Nav.Link as={Link} to="/register">
                <Button variant="outline-light" className="navbar-btn">🔐 Register</Button>
              </Nav.Link>
            )}
          </Nav>

          <Nav className="d-flex align-items-center">
            <Nav.Link as={Link} to="/cart">
              <Button variant="outline-warning" className="navbar-btn">🛒 Ir al Carrito</Button>
            </Nav.Link>
            <Nav.Link>
              <Button variant="outline-warning" className="navbar-btn">💰 ${total.toLocaleString("es-CL")}</Button>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navbarra;

