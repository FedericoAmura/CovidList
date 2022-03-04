import React from 'react';
import { RenderAPI, waitFor } from '@testing-library/react-native';

import { mockInitialStore } from '#/src/configureStore';
import { renderWithNavigation } from '#/helpers';
import screens from '@/constants/screens';
import testIds from '@/constants/testIds';
import Country from '@/screens/Country';
import Countries from '@/screens/Countries';

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
