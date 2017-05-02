/* env jest */

import React from 'react';
import renderer from 'react-test-renderer';
import Home from '../src/components/home/Home';

describe('Home component', () => {
  test('is rendered', () => {
    const component = renderer.create(<Home />);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
