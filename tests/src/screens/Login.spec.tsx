import React from 'react';
import { RenderAPI, waitFor } from '@testing-library/react-native';

import { renderWithNavigation } from '#/helpers';
import screens from '@/constants/screens';
import testIds from '@/constants/testIds';
import Countries from '@/screens/Countries';
import Login from '@/screens/Login';

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

    const googleSignIn = render.getByTestId(testIds.LOGIN_SCREEN.GOOGLE_LOGIN);
    expect(googleSignIn).toBeTruthy();
  });
});
