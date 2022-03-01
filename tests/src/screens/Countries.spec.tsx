import React from 'react';
import { fireEvent, RenderAPI, waitFor } from '@testing-library/react-native';

import { mockInitialStore } from '../configureStore';
import { renderWithNavigation } from '../../helpers';
import screens from '../../../src/constants/screens';
import testIds from '../../../src/constants/testIds';
import Countries from '../../../src/screens/Countries';
import Country from '../../../src/screens/Country';

describe('CountriesScreen', () => {
  let render: RenderAPI;

  beforeEach(async () => {
    await waitFor(() => {
      render = renderWithNavigation(Countries, null, [
          {
            name: screens.COUNTRY,
            component: Country,
          }
        ],
        mockInitialStore);
    });
  });

  it('Should render correctly', () => {
    const countriesScreen = render.getByTestId(testIds.COUNTRIES_SCREEN.container);
    expect(countriesScreen).toBeTruthy();
  });

  it('Should render countries list', () => {
    const countriesList = render.getByTestId(testIds.COUNTRIES_SCREEN.countryList);
    expect(countriesList).toBeTruthy();
  });

  it('Should navigate to CountryScreen upon click', async () => {
    const jordanCountryButton = render.getByTestId(testIds.COUNTRY_ITEM_COMPONENT.container);
    fireEvent.press(jordanCountryButton);

    const countryScreen = render.getByTestId(testIds.COUNTRY_SCREEN.container);
    expect(countryScreen).toBeTruthy();
  });
});
