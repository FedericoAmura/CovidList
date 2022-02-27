import React from 'react';
import { FlatList } from 'react-native';
import { ReactTestRenderer } from 'react-test-renderer';

import { renderWithNavigation } from '../../helpers';
import screens from '../../../src/constants/screens';
import testIds from '../../../src/constants/testIds';
import Countries from '../../../src/screens/Countries';
import Country from '../../../src/screens/Country';

describe('CountriesScreen', () => {
  let render: ReactTestRenderer;

  beforeEach(() => {
    render = renderWithNavigation(Countries, null, [
      {
        name: screens.COUNTRY,
        component: Country,
      }
    ]);
  });

  it('Should render correctly', () => {
    const countriesScreen = render.root.findByProps({ testID: testIds.COUNTRIES_SCREEN.container });
    expect(countriesScreen).toBeTruthy();
  });

  it('Should render countries list', () => {
    const countriesList = render.root.findByType(FlatList);
    expect(countriesList).toBeTruthy();
  });

  // it('Should navigate to CountryScreen upon click', () => {
  //   const jordanCountryButton = render.root.findByType(TouchableOpacity);
  //   act(() => {
  //     jordanCountryButton.props.onPress();
  //   });
  //
  //   const countryScreen = render.root.findByProps({ testID: testIds.COUNTRY_SCREEN.container });
  //   expect(countryScreen).toBeTruthy();
  // });
});
