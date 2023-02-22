import React, { useState } from 'react'
import Header from './components/Layout/Header'
import AvailableMeals from './components/Meals/AvailableMeals'
import MealSummary from './components/Meals/MealSummary'
import Cart from './components/Cart/Cart'

const App = () => {
  const [showCart, setShowCart] = useState(false)

  const showCartHandler = () => {
    setShowCart(true);
  }

  const hideCartHandler = () => {
    setShowCart(false);
  }
  return (
    <>
    {showCart && <Cart hideCartHandler={hideCartHandler}/>}
      <Header showCartHandler={showCartHandler}/>
      <main>
        <MealSummary />
        <AvailableMeals />
      </main>
    </>
  )
}

export default App