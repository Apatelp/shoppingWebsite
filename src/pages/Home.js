import React from 'react';
import { useNavigate } from 'react-router-dom';
import "./Home.css"

const Home = ({ products, onAddToCart }) => {
  const navigate = useNavigate();

  const handleAddToCart = (product) => {
    onAddToCart(product);
    navigate('/cart'); 
  };

  return (
    <div>
      <h1>Home Page</h1>  
      <div className="products">
        {products.map((product) => (
          <div key={product.id} className="product">
            <h2>{product.name}</h2>
            <p>{product.description}</p>
            <p>${product.price}</p>
            <img src={product.image} alt={product.name} />
            <button onClick={() => handleAddToCart(product)}>Add to Cart</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;