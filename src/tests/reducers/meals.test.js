import mealsReducer from '../../reducers/meals';
import { meals } from '../fixtures';

it('should initialize state with an empty array', () => {
  const action = {
    type: '@@INIT',
  };

  const state = mealsReducer(undefined, action);

  expect(state).toEqual([]);
});

it('should set the state with a full array', () => {
  const action = {
    type: 'SET_MEALS',
    meals,
  };

  const state = mealsReducer([], action);

  expect(state).toEqual(meals);
});
