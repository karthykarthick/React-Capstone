import ShallowRenderer from 'react-test-renderer/shallow';
import React from 'react';
import Loader from '../../components/Loader';

const renderer = new ShallowRenderer();

it('should render Loader correctly', () => {
  renderer.render(<Loader />);

  expect(renderer.getRenderOutput()).toMatchSnapshot();
});
