import React from 'react';
import { ReactTestRenderer } from 'react-test-renderer';

import { renderWithNavigation } from '../../helpers';
import FlatTable from '../../../src/components/FlatTable';
import screens from '../../../src/constants/screens';
import testIds from '../../../src/constants/testIds';
import Country from '../../../src/screens/Country';
import Countries from '../../../src/screens/Countries';

describe('CountryScreen', () => {
  let render: ReactTestRenderer;

  beforeEach(() => {
    render = renderWithNavigation(Country, { route: { params: { title: 'Jordan', slug: 'jordan' } }}, [
      {
        name: screens.COUNTRIES,
        component: Countries,
      }
    ]);
  });

  it('Should render correctly', () => {
    const countryScreen = render.root.findByProps({ testID: testIds.COUNTRY_SCREEN.container });
    expect(countryScreen).toBeTruthy();
  });

  it('Should render country daily data table', () => {
    const dataTable = render.root.findByType(FlatTable);
    expect(dataTable).toBeTruthy();
  });
});
