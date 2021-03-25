import ShallowRenderer from 'react-test-renderer/shallow';
import React from 'react';
import { mealDetails } from '../fixtures';
import { MealPage } from '../../containers/MealPage';

const renderer = new ShallowRenderer();

const match = {
  params: {
    id: 23,
  },
};

it('should render MealPage correctly', () => {
  renderer.render(
    <MealPage
      match={match}
      startSetMealDetails={() => {}}
      mealDetails={mealDetails}
    />,
  );

  expect(renderer.getRenderOutput()).toMatchSnapshot();
});

it('should render MealPage correctly without a video', () => {
  const newDetails = {
    ...mealDetails,
    youtubeVideo: false,
  };

  renderer.render(
    <MealPage
      match={match}
      startSetMealDetails={() => {}}
      mealDetails={newDetails}
    />,
  );

  expect(renderer.getRenderOutput()).toMatchSnapshot();
});
