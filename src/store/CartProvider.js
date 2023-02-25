import React, { useState } from "react";
import CartContext from "./cart-context";

const CartProvider = (props) => {
  const [items, updateItems] = useState([]);
  const [totalAmount, updateTotalAmount] = useState(0);

  const addItemToCartHandler = (addItem) => {
    try {
      const index = items.findIndex((item) => item.id === addItem.id);

      const existingCartItem = items[index];
      let updatedItems;
      if (index > -1) {
        const updatedItem = {
          ...existingCartItem,
          quantity: +existingCartItem.quantity + +addItem.quantity,
        };
        updatedItems = [...items];
        updatedItems[index] = updatedItem;
        updateItems(updatedItems);
      } else {
        updateItems([...items, addItem]);
      }
      updateTotalAmount(totalAmount + addItem.price * addItem.quantity);
    } catch (error) {
      console.log(error)
    }
  };

  const addItemFromCartHandler = (addItem) => {
    try {
      const index = items.findIndex((item) => item.id === addItem.id);
      const existingCartItem = items[index];
      let updatedItems;

      const updatedItem = {
        ...existingCartItem,
        quantity: +existingCartItem.quantity + 1,
      };
      updatedItems = [...items];
      updatedItems[index] = updatedItem;
      updateItems(updatedItems);
      updateTotalAmount(totalAmount + addItem.price);
    } catch (error) {
      console.log(error);
    }
  };

  const removeItemFromCartHandler = (remItem) => {
    try {
      updateTotalAmount(totalAmount - remItem.price);
      const index = items.findIndex((item) => item.id === remItem.id);
      const existingCartItem = items[index];
      let updatedItems;

      if (index > -1 && Number(remItem.quantity) > 1) {
        const updatedItem = {
          ...existingCartItem,
          quantity: +remItem.quantity - 1,
        };
        updatedItems = [...items];
        updatedItems[index] = updatedItem;

        updateItems(updatedItems);
      } else {
        let changeItems = [...items];
        updatedItems = [
          ...changeItems.slice(0, index),
          ...changeItems.slice(index + 1, items.length),
        ];
        updateItems(updatedItems);
      }
    } catch (error) {
      console.log(error)
    }
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