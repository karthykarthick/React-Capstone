import React from 'react';
import ConnectedMealsListFilter from '../containers/MealsListFilter';
import ConnectedMealsList from '../containers/MealsList';

const HomePage = () => (
  <div className="page-container">
    <ConnectedMealsListFilter />
    <ConnectedMealsList />
  </div>
);

export default HomePage;
