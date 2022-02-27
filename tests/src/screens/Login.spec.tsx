import React from 'react';
import { ReactTestRenderer } from 'react-test-renderer';

import { renderWithNavigation } from '../../helpers';
import screens from '../../../src/constants/screens';
import testIds from '../../../src/constants/testIds';
import Countries from '../../../src/screens/Countries';
import Login from '../../../src/screens/Login';

describe('LoginScreen', () => {
  let render: ReactTestRenderer;

  beforeEach(() => {
    render = renderWithNavigation(Login, null, [
      {
        name: screens.COUNTRIES,
        component: Countries,
      }
    ]);
  });

  it('Should render correctly', () => {
    const loginScreen = render.root.findByProps({ testID: testIds.LOGIN_SCREEN.container });
    expect(loginScreen).toBeTruthy();
  });
});
