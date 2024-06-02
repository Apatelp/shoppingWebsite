import React from 'react';
import { Table, Button } from 'reactstrap';

const Cart = ({ cartItems, onUpdateQuantity, onRemoveItem, onFinalizePurchase }) => (
  <div>
    <h2>Shopping Cart</h2>
    <Table>
      <thead>
        <tr>
          <th>Product</th>
          <th>Quantity</th>
          <th>Price</th>
          <th>Total</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {cartItems.map(item => (
          <tr key={item.id}>
            <td>{item.name}</td>
            <td>
              <input
                type="number"
                value={item.quantity}
                onChange={e => onUpdateQuantity(item, e.target.value)}
              />
            </td>
            <td>${item.price}</td>
            <td>${item.price * item.quantity}</td>
            <td>
              <Button onClick={() => onRemoveItem(item)}>Remove</Button>
            </td>
          </tr>
        ))}
      </tbody>
    </Table>
    <Button onClick={onFinalizePurchase}>Finalize Purchase</Button>
  </div>
);

export default Cart;
