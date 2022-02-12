import React from 'react';
import { ReactTestRenderer } from 'react-test-renderer';

import { renderWithNavigation } from '../../helpers';
import Countries from '../../../src/navigators/Countries';
import testIds from '../../../src/constants/testIds';

describe('CountriesNavigator', () => {
  let render: ReactTestRenderer;

  beforeEach(() => {
    render = renderWithNavigation(Countries);
  })

  it('Should render countries screen', () => {
    const countriesScreen = render.root.findByProps({ testID: testIds.COUNTRIES_SCREEN.container });
    expect(countriesScreen).toBeTruthy();
  });
});
