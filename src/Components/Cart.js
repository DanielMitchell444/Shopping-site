import React from 'react';
import CartCard from './CartCard';
import Card from './Card';
const Cart = ({ cart, removeItem }) => {
  return (
    <div>
      {cart.map((cartItem, index) => (
        <CartCard

        title = {cartItem.title}
        image = {cartItem.image}
        index = {index}
        removeItem = {removeItem}
        />
       
      ))}
    </div>
  );
};

export default Cart;
