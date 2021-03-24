export const setMealDetails = mealDetails => ({
  type: 'SET_MEAL_DETAILS',
  mealDetails,
});

export const emptyMealDetails = () => ({
  type: 'EMPTY_MEAL_DETAILS',
});

export const startSetMealDetails = mealID => async dispatch => {
  const response = await fetch(
    `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealID}`,
  );

  const data = await response.json();

  const details = data.meals[0];

  const {
    strMeal: title,
    strInstructions: instructions,
    strMealThumb: image,
    strArea: area,
    strCategory: category,
    strYoutube: youtubeVideo,
  } = details;

  const ingredients = [];

  let index = 1;

  while (index <= 20 && details[`strIngredient${index}`]) {
    ingredients.push(`${details[`strMeasure${index}`]} ${details[`strIngredient${index}`]}`);
    index += 1;
  }

  const mealDetails = {
    title,
    instructions,
    image,
    area,
    category,
    youtubeVideo: youtubeVideo.replace('watch?v=', 'embed/'),
    ingredients,
  };

  dispatch(setMealDetails(mealDetails));
};
