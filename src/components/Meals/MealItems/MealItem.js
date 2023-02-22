import React from 'react'
import classes from './MealItem.module.css'

const MealItem = ({item}) => {
    return (
        <li className={classes.meal} key={item.id}>
            <div>
                <h3>{item.name}</h3>
                <div className={classes.description}>{item.description}</div>
                <div className={classes.price}>${item.price}</div>
            </div>
        </li>
    )
}

export default MealItem