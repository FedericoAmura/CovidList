import React from 'react';
import { act, ReactTestRenderer } from 'react-test-renderer';

import { setSignedInStatus } from '../../__mocks__/googleAuth';
import { renderWithNavigation } from '../../helpers';
import Auth from '../../../src/navigators/Auth';
import testIds from '../../../src/constants/testIds';

describe('AuthNavigator', () => {
  let render: ReactTestRenderer;

  it('Should render login screen when user is not logged in', () => {
    render = renderWithNavigation(Auth);

    const loginScreen = render.root.findByProps({ testID: testIds.LOGIN_SCREEN.container });
    expect(loginScreen).toBeTruthy();
  });

  it('Should render countries screen when user is logged in', async () => {
    render = renderWithNavigation(Auth);
    await act(async () => {
      await setSignedInStatus(true);
    });

    const countriesScreen = render.root.findByProps({ testID: testIds.COUNTRIES_SCREEN.container });
    expect(countriesScreen).toBeTruthy();
  });
});
