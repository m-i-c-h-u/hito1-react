import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import Button from 'react-bootstrap/Button'


const Navbarra = () => {
const total = 25000
const token = false

  return (
    <section>
    <Navbar bg="dark" variant="dark" collapseOnSelect expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home">Pizzería Mamma Mía</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
          <Nav.Link href="#Home"><Button variant="outline-light">🍕Home</Button></Nav.Link>
            <Nav.Link href="#Login"><Button variant="outline-light">{token? "🔓Profile":"🔐Login"}</Button></Nav.Link>
            <Nav.Link href="#Register"><Button variant="outline-light">{token? "🔒Logout":"🔐Register"}</Button></Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link href="#total"><Button variant="outline-primary">🛒Total {total}</Button></Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </section>
  )
}

export default Navbarra