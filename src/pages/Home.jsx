import CardPizza from "../components/CardPizza.jsx"
import Header from "../components/Header.jsx"
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { useState, useEffect } from "react"

const URL = "http://localhost:5000/api/pizzas"
const Home = () => {

  const [pizza, setPizza] = useState([])

  useEffect(() => {
    const fetchPizza = async () => {
      try {
        const response = await fetch(URL);
        const data = await response.json();
        setPizza(data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchPizza();
  }, []);

  return (
    <section>
      <Header />
      <Container className="mt-4">
        <Row> 
          {pizza.map((pizza) => (
            <Col key={pizza.id} xs={12} sm={6} md={4} lg={4}>
              <CardPizza 
              id={pizza.id}
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