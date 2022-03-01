import React from 'react';
import { RenderAPI, waitFor } from '@testing-library/react-native';

import { renderWithNavigation } from '../../helpers';
import screens from '../../../src/constants/screens';
import testIds from '../../../src/constants/testIds';
import Countries from '../../../src/screens/Countries';
import Login from '../../../src/screens/Login';

describe('LoginScreen', () => {
  let render: RenderAPI;

  beforeEach(async () => {
    await waitFor(() => {
      render = renderWithNavigation(Login, null, [
        {
          name: screens.COUNTRIES,
          component: Countries,
        }
      ]);
    });
  });

  it('Should render correctly', () => {
    const loginScreen = render.getByTestId(testIds.LOGIN_SCREEN.container);
    expect(loginScreen).toBeTruthy();
  });
});
