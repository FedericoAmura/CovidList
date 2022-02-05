import React from 'react';
import 'react-native';

import { renderWithNavigation } from '../../helpers';
import Country from '../../../src/screens/Country';

describe('CountryScreen', () => {
  it('Should render correctly', () => {
    renderWithNavigation(Country);
  });
});
