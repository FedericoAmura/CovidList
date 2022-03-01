import React from 'react';
import { RenderAPI, waitFor } from '@testing-library/react-native';

import { mockInitialStore } from '../configureStore';
import { renderWithNavigation } from '../../helpers';
import screens from '../../../src/constants/screens';
import testIds from '../../../src/constants/testIds';
import Country from '../../../src/screens/Country';
import Countries from '../../../src/screens/Countries';

describe('CountryScreen', () => {
  let render: RenderAPI;

  beforeEach(async () => {
    await waitFor(() => {
      render = renderWithNavigation(Country, { route: { params: { title: 'Jordan', slug: 'jordan' } }}, [
          {
            name: screens.COUNTRIES,
            component: Countries,
          }
        ],
        mockInitialStore);
    });
  });

  it('Should render correctly', () => {
    const countryScreen = render.getByTestId(testIds.COUNTRY_SCREEN.container);
    expect(countryScreen).toBeTruthy();
  });

  it('Should render country daily data table', () => {
    const dataTable = render.getByTestId(testIds.FLAT_TABLE_COMPONENT.container);
    expect(dataTable).toBeTruthy();
  });
});
