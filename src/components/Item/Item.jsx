import React from 'react'
import { Button, Card } from 'react-bootstrap';

const Item = ({prod}) => {
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img variant="top" src={prod.img}/>
      <Card.Body>
        <Card.Title>{prod.name}</Card.Title>
        <Card.Text>{prod.description}.</Card.Text>
        <Card.Text>${prod.price}.</Card.Text>
        <Button variant="primary">ver màs</Button>
      </Card.Body>
    </Card>
  );
}

export default Item