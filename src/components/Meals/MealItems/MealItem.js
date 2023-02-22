import React from 'react'
import classes from './MealItem.module.css'
import MealItemForm from './MealItemForm'

const MealItem = ({item}) => {
    return (
        <li className={classes.meal} key={item.id}>
            <div>
                <h3>{item.name}</h3>
                <div className={classes.description}>{item.description}</div>
                <div className={classes.price}>${item.price}</div>
            </div>
            <div>
                <MealItemForm id={item.id} />
            </div>
        </li>
    )
}

export default MealItem