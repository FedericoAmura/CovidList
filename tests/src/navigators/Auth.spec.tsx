import React from 'react';
import { RenderAPI, waitFor } from '@testing-library/react-native';

import { setSignedInStatus } from '#/__mocks__/googleAuth';
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

  it('Should render countries screen when user is logged in', async () => {
    await waitFor(async () => {
      await setSignedInStatus(true);
    });

    const countriesScreen = render.getByTestId(testIds.COUNTRIES_SCREEN.container);
    expect(countriesScreen).toBeTruthy();
  });
});
