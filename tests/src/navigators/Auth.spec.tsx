import React from 'react';
import { fireEvent, RenderAPI, waitFor } from '@testing-library/react-native';

import { renderWithNavigation } from '#/helpers';
import Auth from '@/navigators/Auth';
import testIds from '@/constants/testIds';

describe('AuthNavigator', () => {
  let render: RenderAPI;

  beforeEach(async () => {
    await waitFor(() => {
      render = renderWithNavigation(Auth);
    });
  });

  it('Should render login screen when user is not logged in', () => {
    const loginScreen = render.getByTestId(testIds.LOGIN_SCREEN.container);
    expect(loginScreen).toBeTruthy();
  });

  it('Should render countries screen after user signs in', async () => {
    const loginButton = render.getByTestId(testIds.LOGIN_SCREEN.googleLoginButton);
    fireEvent.press(loginButton);

    await waitFor(() => {
      const countriesScreen = render.getByTestId(testIds.COUNTRIES_SCREEN.container);
      expect(countriesScreen).toBeTruthy();
    });
  });

  it('Should render login screen after user signs out', async () => {
    await waitFor(() => {
      const loginButton = render.getByTestId(testIds.LOGIN_SCREEN.googleLoginButton);
      fireEvent.press(loginButton);
    });

    await waitFor(() => {
      const logoutButton = render.getByTestId(testIds.COUNTRY_NAVIGATOR.signOutButton);
      fireEvent.press(logoutButton);
    });

    await waitFor(() => {
      const loginScreen = render.getByTestId(testIds.LOGIN_SCREEN.container);
      expect(loginScreen).toBeTruthy();
    });
  });
});
