import CardPizza from "./CardPizza"
import Header from "./Header"
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { pizzas } from "../assets/pizzas.js"
import { useState, useEffect } from "react"

const URL = "http://localhost:5000/api/pizzas"
const Home = () => {

  const [pizzas, setPizzas] = useState([])

  useEffect(() => {
    const fetchPizzas = async () => {
      try {
        const response = await fetch(URL);
        const data = await response.json();
        setPizzas(data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchPizzas();
  }, []);

  return (
    <section>
      <Header />
      <Container className="mt-4">
        <Row className="g-4"> 
          {pizzas.map((pizza) => (
            <Col key={pizza.id} xs={12} sm={6} md={4} lg={3}>
              <CardPizza 
              img={pizza.img} 
              name={pizza.name} 
              ingredients={pizza.ingredients} 
              price={pizza.price} />
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  )
}

export default Home