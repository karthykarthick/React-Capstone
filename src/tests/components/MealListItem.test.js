import ShallowRenderer from 'react-test-renderer/shallow';
import React from 'react';
import MealListItem from '../../components/MealListItem';

const mealTest = {
  id: '234214',
  title: 'This is a title',
  image: 'https://www.google.com/images/test.png',
  category: 'Seafood',
};

const renderer = new ShallowRenderer();

it('should render MealListItem correctly', () => {
  renderer.render(<MealListItem meal={mealTest} />);

  expect(renderer.getRenderOutput()).toMatchSnapshot();
});

it('should render MealListItem correctly with dots on title', () => {
  const newMeal = {
    ...mealTest,
    title: 'This is a really long title that should be trunctated',
  };

  renderer.render(<MealListItem meal={newMeal} />);

  expect(renderer.getRenderOutput()).toMatchSnapshot();
});
