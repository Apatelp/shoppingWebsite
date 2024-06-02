import React from 'react';
import { Card, Button, CardImg, CardTitle, CardText, CardBody } from 'reactstrap';

const Product = ({ product, onAddToCart }) => (
  <Card>
    <CardImg top width="100%" src={product.image} alt={product.name} />
    <CardBody>
      <CardTitle>{product.name}</CardTitle>
      <CardText>{product.description}</CardText>
      <CardText>${product.price}</CardText>
      <Button onClick={() => onAddToCart(product)}>Add to Cart</Button>
    </CardBody>
  </Card>
);

export default Product;
