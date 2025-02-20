import React from 'react'
import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import '../App.css'

const CardPizza = ({ img, name, ingredients, price, id }) => {
  const { addToCart } = useCart();

  return (
    <Card className="card-pizza">
      <Card.Img variant="top" src={img} className="card-img-top" />
      <Card.Body className="card-pizza-body">
        <Card.Title className="card-pizza-title">Pizza {name}</Card.Title>
        <Card.Subtitle className="card-pizza-subtitle">Ingredientes</Card.Subtitle>
        <ul className="card-pizza-ingredients">
          {ingredients.map((ingredient, index) => (
            <li key={index}>🍕 {ingredient}</li>
          ))}
        </ul>
        <Card.Title className="card-pizza-price">Precio ${price}</Card.Title>
        <div className="card-pizza-buttons">
          <Link to={`/pizza/${id}`}>
            <Button variant="outline-dark" className="card-pizza-button">👀 Ver más</Button>
          </Link>
          <Button variant="dark" className="card-pizza-button" onClick={() => addToCart({ id, name, price, img })}>
            🛒 Añadir
          </Button>
        </div>
      </Card.Body>
    </Card>
  )
}

export default CardPizza;
