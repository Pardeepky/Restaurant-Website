import React, { useState } from 'react'
import Header from './components/Layout/Header'
import AvailableMeals from './components/Meals/AvailableMeals'
import MealSummary from './components/Meals/MealSummary'
import Cart from './components/Cart/Cart'
import CartProvider from './store/CartProvider'

const App = () => {
  const [showCart, setShowCart] = useState(false)

  const showCartHandler = () => {
    setShowCart(true);
  }

  const hideCartHandler = () => {
    setShowCart(false);
  }
  return (
    <CartProvider>
      {showCart && <Cart hideCartHandler={hideCartHandler} />}
      <Header showCartHandler={showCartHandler} />
      <main>
        <MealSummary />
        <AvailableMeals />
      </main>
    </CartProvider>
  )
}

export default App