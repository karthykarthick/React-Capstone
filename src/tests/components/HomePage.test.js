import ShallowRenderer from 'react-test-renderer/shallow';
import React from 'react';
import HomePage from '../../components/HomePage';

const renderer = new ShallowRenderer();

it('should render HomePage correctly', () => {
  renderer.render(<HomePage />);

  expect(renderer.getRenderOutput()).toMatchSnapshot();
});
