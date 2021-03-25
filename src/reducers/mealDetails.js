const defaultState = {
  title: '',
  instructions: '',
  image: '',
  area: '',
  category: '',
  youtubeVideo: '',
  ingredients: [],
};

const mealDetailsReducer = (state = defaultState, action) => {
  switch (action.type) {
    case 'SET_MEAL_DETAILS':
      return action.mealDetails;
    case 'EMPTY_MEAL_DETAILS':
      return defaultState;
    default:
      return state;
  }
};

export default mealDetailsReducer;
