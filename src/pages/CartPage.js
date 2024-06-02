import React from 'react';
import Cart from '../components/Cart';

const CartPage = ({ cartItems, onUpdateQuantity, onRemoveItem, onFinalizePurchase }) => (
  <Cart
    cartItems={cartItems}
    onUpdateQuantity={onUpdateQuantity}
    onRemoveItem={onRemoveItem}
    onFinalizePurchase={onFinalizePurchase}
  />
);

export default CartPage;
