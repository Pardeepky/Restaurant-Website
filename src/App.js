import React from 'react'
import Header from './components/Layout/Header'
import AvailableMeals from './components/Meals/AvailableMeals'
import MealSummary from './components/Meals/MealSummary'

const App = () => {
  return (
    <>
      <Header />
      <main>
        <MealSummary />
        <AvailableMeals />
      </main>
    </>
  )
}

export default App