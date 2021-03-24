import mealDetailsReducer from '../../reducers/mealDetails';

const defaultState = {
  title: '',
  instructions: '',
  image: '',
  area: '',
  category: '',
  youtubeVideo: '',
  ingredients: [],
};

const filledState = {
  title: 'Title',
  instructions: 'instructions',
  image: 'link to image',
  area: 'area',
  category: 'B',
  youtubeVideo: 'video link',
  ingredients: ['1', '2'],
};

it('should initialize state correctly', () => {
  const action = {
    type: '@@INIT',
  };

  const state = mealDetailsReducer(undefined, action);

  expect(state).toEqual(defaultState);
});

it('should set State to the corresponding values', () => {
  const action = {
    type: 'SET_MEAL_DETAILS',
    mealDetails: filledState,
  };

  const state = mealDetailsReducer(defaultState, action);

  expect(state).toEqual(filledState);
});

it('should reset State to the default values', () => {
  const action = {
    type: 'EMPTY_MEAL_DETAILS',
  };

  const state = mealDetailsReducer(filledState, action);

  expect(state).toEqual(defaultState);
});
