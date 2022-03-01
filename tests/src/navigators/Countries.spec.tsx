import React from 'react';
import { RenderAPI, waitFor } from '@testing-library/react-native';

import { mockInitialStore } from '../configureStore';
import { renderWithNavigation } from '../../helpers';
import Countries from '../../../src/navigators/Countries';
import testIds from '../../../src/constants/testIds';
import screens from '../../../src/constants/screens';
import Country from '../../../src/screens/Country';

describe('CountriesNavigator', () => {
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

  it('Should render countries screen when starting', () => {
    const countriesScreen = render.getByTestId(testIds.COUNTRIES_SCREEN.container);
    expect(countriesScreen).toBeTruthy();
  });
});
