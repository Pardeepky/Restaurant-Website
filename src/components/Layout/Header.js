import React from 'react'
import mealImg from '../../assets/meals.jpg'
import classes from './Header.module.css'
import HeaderCartButton from './HeaderCartButton'

const Header = ({showCartHandler}) => {
    return (
        <>
            <header className={classes.header}>
                <h1>ReactMeals</h1>
                <HeaderCartButton  showCartHandler={showCartHandler}/>
            </header>
            <div className={classes['main-image']}>
                <img src={mealImg} alt="A table full of delicious food" />
            </div>
        </>
    )
}

export default Header