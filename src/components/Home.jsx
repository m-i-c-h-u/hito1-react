import CardPizza from "./CardPizza"
import Header from "./Header"
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { pizzas } from "../assets/pizzas.js"

const Home = () => {
  return (
    <section>
      <Header />
      <Container className="mt-4">
        <Row className="g-4"> 
          {pizzas.map((pizza) => (
          <Col md={4} key={pizza.id}>
            <CardPizza 
            img={pizza.img} 
            name={pizza.name} 
            ingredients={pizza.ingredients} 
            price={pizza.price}
            />
          </Col>
          ))}
        </Row>
      </Container>
    </section>
  )
}

export default Home