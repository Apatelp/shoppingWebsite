import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home.js';
import CartPage from './pages/CartPage.js';
import AccountPage from './pages/AccountPage.js';

import './App.css';

const App = () => {
  const [products] = useState([
    { id: 1, name: 'Smart Water Bottle', description: 'A smart water bottle that tracks your daily water intake and reminds you to stay hydrated via a mobile app.', price: 45, image: './images/SmartWaterBottle.jpeg' },
    { id: 2, name: 'Compact Air Purifier', description: 'Portable air purifier with HEPA filter technology, ideal for small rooms and office spaces.', price: 60, image: './images/AirPurifier.jpeg' },
    { id: 3, name: 'Wireless Charging Pad', description: 'Sleek and fast wireless charging pad compatible with Qi-enabled devices, including smartphones and earbuds.', price: 25, image: './images/WirelessChargingPad.jpeg' },
    { id: 4, name: 'Electric Spice Grinder', description: 'High-performance electric spice grinder with stainless steel blades, perfect for grinding spices, herbs, and coffee beans.', price: 35, image: './images/ElectricSpiceGrinder.jpeg' },
    { id: 5, name: 'Smart Light Bulb', description: 'Wi-Fi enabled smart light bulb with adjustable brightness and color. Control via a smartphone app or voice commands with Alexa/Google Assistant.', price: 20, image: './images/Smartlightbulbs.jpg' }
  ]);

  const [cartItems, setCartItems] = useState([]);
  const [user, setUser] = useState({ name: '', address: '' });


  // add to cart
  const handleAddToCart = product => {
    setCartItems([...cartItems, { ...product, quantity: 1 }]);
  };

  // update the quantity
  const handleUpdateQuantity = (product, quantity) => {
    setCartItems(
      cartItems.map(item => (item.id === product.id ? { ...item, quantity: parseInt(quantity, 10) } : item))
    );
  };

  // remove item form cart
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
        <Routes>
          <Route path="/" element={<Home products={products} onAddToCart={handleAddToCart} />} />
          <Route 
            path="/cart" 
            element={<CartPage
              cartItems={cartItems}
              onUpdateQuantity={handleUpdateQuantity}
              onRemoveItem={handleRemoveItem}
              onFinalizePurchase={handleFinalizePurchase}
            />} 
          />
          <Route 
            path="/account" 
            element={<AccountPage user={user} onUpdateUser={handleUpdateUser} />} 
          />
        </Routes>
      </div>
    </Router>
  );
};

export default App;