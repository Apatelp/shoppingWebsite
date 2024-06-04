import React from 'react';
import { Card, Button, CardImg, CardTitle, CardText, CardBody } from 'react-bootstrap';
import './Product.css';

const Product = ({ product, onAddToCart }) => (
  <Card className="product-card">
    <Card.Img variant="top" src={product.image} alt={product.name} />
    <Card.Body className="product-card-body">
      <Card.Title className="product-card-title">{product.name}</Card.Title>
      <Card.Text className="product-card-text">{product.description}</Card.Text>
      <Card.Text className="product-card-price">${product.price}</Card.Text>
      <Button variant="primary" onClick={() => onAddToCart(product)}>Add to Cart</Button>
    </Card.Body>
  </Card>
);

export default Product;
