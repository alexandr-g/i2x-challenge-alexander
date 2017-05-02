/* env jest */

import React from 'react';
import renderer from 'react-test-renderer';
import TextFieldGroup from '../src/components/login/TextFieldGroup';

describe('TextFieldGroup:', () => {
  test('is rendered', () => {
    const component = renderer.create(<TextFieldGroup field="email" label="E-mail" value="test@test.com" />);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
