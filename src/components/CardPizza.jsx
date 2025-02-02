import React from 'react'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'


const CardPizza = ({img, name, ingredients, price}) => {
  return (
    <Card style={{ width: '25rem'}}>
    <Card.Img variant="top" src={img} />
    <Card.Body className="mb-4">
      <Card.Title>Pizza {name}</Card.Title>
      <Card.Subtitle className="mb-2 text-muted text-center">Ingredientes</Card.Subtitle>
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
      <Button variant="dark"> 🛒 Añadir</Button>
      </div>
    </Card.Body>
  </Card>
  )
}

export default CardPizza