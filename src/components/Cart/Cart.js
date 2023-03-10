import { useContext } from "react";
import CartContext from "../../store/cart-context";
import Modal from "../UI/Modal";
import classes from "./Cart.module.css";
import CartItem from "./CartItem";

const Cart = (props) => {
  const cartContext = useContext(CartContext);

  const totalAmount = `${cartContext.totalAmount.toFixed("2")}`;
  const hasItems = cartContext.items.length > 0;

  const decreaseItemCountHandler = (item) => {
    cartContext.removeItem(item);
  };

  const increaseItemCountHandler = (item) => {
    cartContext.addItemFromCart(item);
  };

  const orderItem = () => {
    console.log('Ordering...')
  }

  const data = cartContext.items.map((item) => (
    <CartItem
      id={Math.random().toString()}
      key={Math.random()}
      name={item.name}
      amount={item.quantity}
      price={item.price}
      onRemove={() => decreaseItemCountHandler(item)}
      onAdd={() => increaseItemCountHandler(item)}
    ></CartItem>
  ));

  const cartItems = <ul className={classes["cart-items"]}>{data}</ul>;
  return (
    <Modal hideCartHandler={props.hideCartHandler} >
      {cartItems}
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>{totalAmount}</span>
      </div>
      <div className={classes.actions}>
        <button className={classes['button--alt']} onClick={props.hideCartHandler}>Close</button>
        {hasItems && <button className={classes.button} onClick={orderItem}>Order</button>}
      </div>
    </Modal>
  );
};

export default Cart;