import categoriesReducer from '../../reducers/categories';
import { categories } from '../fixtures';

it('should initialize state with an empty array', () => {
  const action = {
    type: '@@INIT',
  };

  const state = categoriesReducer(undefined, action);

  expect(state).toEqual([]);
});

it('should set the state with a full array', () => {
  const action = {
    type: 'SET_CATEGORIES',
    categories,
  };

  const state = categoriesReducer([], action);

  expect(state).toEqual(categories);
});
