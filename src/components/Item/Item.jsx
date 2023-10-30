import React from 'react'
import { Button, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Item.css'

const Item = ({prod}) => {
  return (
    <Card className='CardItem'>
      <Card.Img variant="top" src={prod.img}/>
      <Card.Body>
        <Card.Title>{prod.name}</Card.Title>
        <Card.Text>{prod.description}.</Card.Text>
        <Card.Text>${prod.price}.</Card.Text>
       
        <Button as={Link} to={`/item/${prod.id}`} variant="primary">ver màs</Button>
      </Card.Body>
    </Card>
  );
}

export default Item