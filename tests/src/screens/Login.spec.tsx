import React from 'react';
import { Button } from 'react-native';
import { act } from 'react-test-renderer';

import { renderWithNavigation } from '../../helpers';
import screens from '../../../src/constants/screens';
import Countries from '../../../src/screens/Countries';
import Login from '../../../src/screens/Login';

describe('LoginScreen', () => {
  it('Should render correctly', () => {
    const instance = renderWithNavigation(Login, [
      {
        name: screens.COUNTRIES,
        component: Countries,
      },
    ]);

    const button = instance.root.findByType(Button);
    act(() => {
      button.props.onPress();
    });
  });
});
