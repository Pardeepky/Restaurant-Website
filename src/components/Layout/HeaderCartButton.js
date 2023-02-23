import React, { useContext } from 'react'
import CartContext from '../../store/cart-context'
import CartIcon from '../Cart/CartIcon'
import classes from './HeaderCartButton.module.css'

const HeaderCartButton = ({showCartHandler}) => {

    const cartCtx = useContext(CartContext);

    const numberOfCartItems = cartCtx.items.reduce((curNumber, item)=> {
        return parseInt(curNumber) + parseInt(item.quantity);
    }, 0);
    return (
        <>
            <button className={classes.button} onClick={showCartHandler}>
                <span className={classes.icon}>
                    <CartIcon />
                </span>
                <span>Your Cart</span>
                <span className={classes.badge}>{numberOfCartItems}</span>
            </button>
        </>
    )
}

export default HeaderCartButton