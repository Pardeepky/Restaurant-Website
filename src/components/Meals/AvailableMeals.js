import React from 'react'
import DUMMY_MEALS from '../../assets/dummy-meals'
import Card from '../UI/Card'
import classes from './AvailableMeals.module.css'
import MealItem from './MealItems/MealItem'

const AvailableMeals = () => {
    return (
        <section className={classes.meals}>
            <Card>
                <ul>
                    {DUMMY_MEALS.map((item) => {
                        return (
                            <MealItem item={item}/>
                        )
                    })}
                </ul>
            </Card>
        </section>
    )
}

export default AvailableMeals