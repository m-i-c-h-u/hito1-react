import React from 'react'
import { useCart } from "../context/CartContext";
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import '../App.css'


const CardPizza = ({img, name, ingredients, price, id}) => {
  const { addToCart } = useCart();
  return (
    <div className="card-pizza-container">
    <Card className="card-pizza">
    <Card.Img variant="top" src={img} />
    <Card.Body className="mb-4">
      <Card.Title>Pizza {name}</Card.Title>
      <Card.Subtitle className="mb-2 text-muted">Ingredientes</Card.Subtitle>
      <Card.Text>
        <ul>
          {ingredients.map ((ingredient, index) => (
            <li key={index}> 🍕 {ingredient}</li>
          ))}
        </ul>
      </Card.Text>
      <Card.Title className="text-center">Precio ${price}</Card.Title>
      <div className="d-flex justify-content-between mt-3">
      <Button variant="outline-dark">ver más 👀</Button>
      <Button onClick={() => addToCart({ id, name, price, img })}> 🛒 Añadir</Button>
      </div>
    </Card.Body>
  </Card>
  </div>
  )
}

export default CardPizza