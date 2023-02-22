import React from 'react'
import Header from './components/Layout/Header'
import AvailableMeals from './components/Meals/AvailableMeals'
import MealSummary from './components/Meals/MealSummary'
import Cart from './components/Cart/Cart'

const App = () => {
  return (
    <>
    <Cart />
      <Header />
      <main>
        <MealSummary />
        <AvailableMeals />
      </main>
    </>
  )
}

export default App