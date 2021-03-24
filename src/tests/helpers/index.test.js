import { getUniqueMeals, filterMeals, truncate } from '../../helpers';
import { messyMeals, meals } from '../fixtures';

it('should return unique meals', () => {
  const calculatedMeals = getUniqueMeals(messyMeals);

  expect(calculatedMeals).toEqual(meals);
});

it('it should filter meals by text', () => {
  const filteredMeals = filterMeals(meals, {
    text: 'meal title 1',
    category: '',
  });

  expect(filteredMeals).toEqual([meals[0]]);
});

it('it should filter meals by category', () => {
  const filteredMeals = filterMeals(meals, {
    text: '',
    category: 'Chicken',
  });

  expect(filteredMeals).toEqual([meals[1], meals[2]]);
});

it('it should filter meals by category and text', () => {
  const filteredMeals = filterMeals(meals, {
    text: 'meal title 2',
    category: 'Chicken',
  });

  expect(filteredMeals).toEqual([meals[1]]);
});

it('it should return the same meals with empty filters', () => {
  const filteredMeals = filterMeals(meals, {
    text: '',
    category: '',
  });

  expect(filteredMeals).toEqual(meals);
});

it('should truncate string if limit exceeded', () => {
  const string = truncate('Hi My Name is Zakariae and I\'m a Software Engineer', 10);

  expect(string).toBe('Hi My Nam...');
});
