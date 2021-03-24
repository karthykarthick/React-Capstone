export const getUniqueMeals = meals => {
  const result = [];
  const uniqueMeals = {};

  meals.forEach(({
    idMeal, strMeal, strMealThumb, category,
  }) => {
    if (!uniqueMeals[idMeal]) {
      uniqueMeals[idMeal] = {
        title: strMeal,
        image: `${strMealThumb}/preview`,
        category,
      };
    }
  });

  Object.keys(uniqueMeals).forEach(id => {
    if (id !== 'undefined') {
      result.push({
        id,
        ...uniqueMeals[id],
      });
    }
  });

  return result;
};

export const filterMeals = (meals, filters) => {
  const { text, category } = filters;

  return meals.filter(meal => meal.title.toLowerCase().includes(text.toLowerCase())
    && meal.category.includes(category));
};

export const truncate = (str, n) => {
  const string = (str.length > n) ? `${str.substr(0, n - 1)}...` : str;
  return string;
};
