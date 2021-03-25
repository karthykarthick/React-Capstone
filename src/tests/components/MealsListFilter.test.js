import ShallowRenderer from 'react-test-renderer/shallow';
import React from 'react';
import { categories } from '../fixtures';
import { MealsListFilter } from '../../containers/MealsListFilter';

const renderer = new ShallowRenderer();

it('should render MealsListFilter correctly', () => {
  renderer.render(
    <MealsListFilter
      categories={categories}
      text=""
      category=""
      setTextFilter={() => {}}
      setCategoryFilter={() => {}}
    />,
  );

  expect(renderer.getRenderOutput()).toMatchSnapshot();
});
