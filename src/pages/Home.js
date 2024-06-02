import React from 'react';
import Product from '../components/Product';

const Home = ({ products, onAddToCart }) => (
  <div>
    <h1>Products</h1>
    <div className="product-list">
      {products.map(product => (
        <Product key={product.id} product={product} onAddToCart={onAddToCart} />
      ))}
    </div>
  </div>
);

export default Home;