import React from 'react';

const CartContext = React.createContext({
  items: [],
  totalAmount: 0,
  addItem: (item) => {},
  addItemFromCart: (item) => {},
  removeItem: (item) => {},
});

export default CartContext;