import React from 'react';
import { ReactTestRenderer } from 'react-test-renderer';

import { renderWithNavigation } from '../../helpers';
import Auth from '../../../src/navigators/Auth';
import testIds from '../../../src/constants/testIds';

describe('AuthNavigator', () => {
  let render: ReactTestRenderer;

  beforeEach(() => {
    render = renderWithNavigation(Auth);
  })

  it('Should render login screen when user is not logged in', () => {
    const loginScreen = render.root.findByProps({ testID: testIds.LOGIN_SCREEN.container });
    expect(loginScreen).toBeTruthy();
  });

  it('Should render countries screen when user is logged in', () => {
    jest.mock('../../../src/hooks/useSession', () => ({
      __esModule: true,
      default: () => ({
        getUserData: () => ({}), // we just need a truthy value
      }),
    }));

    const loginScreen = render.root.findByProps({ testID: testIds.LOGIN_SCREEN.container });
    expect(loginScreen).toBeTruthy();
  });
});
