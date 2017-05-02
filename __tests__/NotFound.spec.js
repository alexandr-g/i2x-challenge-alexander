/* env jest */

import React from 'react';
import renderer from 'react-test-renderer';
import NotFound from '../src/components/NotFound';

describe('NotFound page', () => {
  test('is rendered', () => {
    const component = renderer.create(<NotFound />);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
