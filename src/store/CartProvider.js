import React, { useState } from "react";
import CartContext from "./cart-context";

const CartProvider = (props) => {
  const [items, updateItems] = useState([]);
  const [totalAmount, updateTotalAmount] = useState(0);

  const addItemToCartHandler = (addItem) => {
    const index = items.findIndex((item) => item.id === addItem.id);

    const existingCartItem = items[index];
    let updatedItems;
    if (index > -1) {
      const updatedItem = {
        ...existingCartItem,
        quantity: +existingCartItem.quantity + 1,
      };
      updatedItems = [...items];
      updatedItems[index] = updatedItem;
      updateItems(updatedItems);
    } else {
      updateItems([...items, addItem]);
    }

    updateTotalAmount(totalAmount + addItem.price * addItem.quantity);
  };

  const addItemFromCartHandler = (addItem) => {
   
  };

  const removeItemFromCartHandler = (remItem) => {
    
  };

  const cartContext = {
    items: items,
    totalAmount: totalAmount,
    addItem: addItemToCartHandler,
    addItemFromCart: addItemFromCartHandler,
    removeItem: removeItemFromCartHandler,
  };

  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};
export default CartProvider;