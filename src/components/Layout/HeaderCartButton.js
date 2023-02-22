import React from 'react'
import CartIcon from '../Cart/CartIcon'
import classes from './HeaderCartButton.module.css'

const HeaderCartButton = ({showCartHandler}) => {
    return (
        <>
            <button className={classes.button} onClick={showCartHandler}>
                <span className={classes.icon}>
                    <CartIcon />
                </span>
                <span>Your Cart</span>
                <span className={classes.badge}>0</span>
            </button>
        </>
    )
}

export default HeaderCartButton