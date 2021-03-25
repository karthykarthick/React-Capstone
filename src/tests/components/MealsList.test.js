import ShallowRenderer from 'react-test-renderer/shallow';
import React from 'react';
import { meals } from '../fixtures';
import { MealsList } from '../../containers/MealsList';

let renderer;

beforeEach(() => {
  renderer = new ShallowRenderer();
});

it('should render MealsList with full meals correctly', () => {
  renderer.render(<MealsList meals={meals} startSetMeals={() => {}} />);

  expect(renderer.getRenderOutput()).toMatchSnapshot();
});

it('should render MealsList with empty meals correctly', () => {
  renderer.render(<MealsList meals={[]} startSetMeals={() => {}} />);

  expect(renderer.getRenderOutput()).toMatchSnapshot();
});
