import React from 'react';
import { Button } from 'react-native';
import { act } from 'react-test-renderer';

import { renderWithNavigation } from '../../helpers';
import screens from '../../../src/constants/screens';
import Countries from '../../../src/screens/Countries';
import Country from '../../../src/screens/Country';

describe('CountriesScreen', () => {
  it('Should render correctly', () => {
    const instance = renderWithNavigation(Countries, [
      {
        name: screens.COUNTRY,
        component: Country,
      }
    ]);

    const button = instance.root.findByType(Button);
    act(() => {
      button.props.onPress();
    });
  });
});
