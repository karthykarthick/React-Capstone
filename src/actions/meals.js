import { getUniqueMeals } from '../helpers';
import setCategories from './categories';

export const setMeals = meals => ({
  type: 'SET_MEALS',
  meals,
});

export const startSetMeals = () => async dispatch => {
  let finalMeals = [];

  const categoriesResponse = await fetch(
    'https://www.themealdb.com/api/json/v1/1/categories.php',
  );
  const { categories } = await categoriesResponse.json();

  dispatch(setCategories(categories.map(category => category.strCategory)));

  const mealsSlots = await Promise.all(categories.map(category => new Promise((resolve, reject) => {
    fetch(
      `https://www.themealdb.com/api/json/v1/1/filter.php?c=${category.strCategory}`,
    ).then(
      response => response.json(),
    ).then(data => {
      const categoriesedMeals = [];

      data.meals.forEach(meal => {
        categoriesedMeals.push({
          ...meal,
          category: category.strCategory,
        });
      });

      resolve(categoriesedMeals);
    }).catch(err => {
      reject(err);
    });
  })));

  mealsSlots.forEach(meals => {
    finalMeals = finalMeals.concat(meals);
  });

  const result = getUniqueMeals(finalMeals);

  dispatch(setMeals(result));
};
