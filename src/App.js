import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import CartPage from './pages/CartPage';
import AccountPage from './pages/AccountPage';
import './App.css';

const App = () => {
  const [products] = useState([
    { id: 1, name: 'Product 1', description: 'Description 1', price: 10, image: 'image1.jpg' },
    { id: 2, name: 'Product 2', description: 'Description 2', price: 20, image: 'image2.jpg' },
    { id: 3, name: 'Product 3', description: 'Description 3', price: 30, image: 'image3.jpg' },
    { id: 4, name: 'Product 4', description: 'Description 4', price: 40, image: 'image4.jpg' },
    { id: 5, name: 'Product 5', description: 'Description 5', price: 50, image: 'image5.jpg' }
  ]);

  const [cartItems, setCartItems] = useState([]);
  const [user, setUser] = useState({ name: '', address: '' });

  const handleAddToCart = product => {
    setCartItems([...cartItems, { ...product, quantity: 1 }]);
  };

  const handleUpdateQuantity = (product, quantity) => {
    setCartItems(
      cartItems.map(item => (item.id === product.id ? { ...item, quantity: parseInt(quantity, 10) } : item))
    );
  };

  const handleRemoveItem = product => {
    setCartItems(cartItems.filter(item => item.id !== product.id));
  };

  const handleFinalizePurchase = () => {
    alert('Purchase finalized!');
    setCartItems([]);
  };

  const handleUpdateUser = updatedUser => {
    setUser(updatedUser);
  };

  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/" exact>
            <Home products={products} onAddToCart={handleAddToCart} />
          </Route>
          <Route path="/cart">
            <CartPage
              cartItems={cartItems}
              onUpdateQuantity={handleUpdateQuantity}
              onRemoveItem={handleRemoveItem}
              onFinalizePurchase={handleFinalizePurchase}
            />
          </Route>
          <Route path="/account">
            <AccountPage user={user} onUpdateUser={handleUpdateUser} />
          </Route>
        </Switch>
      </div>
    </Router>
  );
};

export default App;
