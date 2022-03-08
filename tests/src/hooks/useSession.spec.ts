import { renderHook, act } from '@testing-library/react-hooks';

import { MOCK_GOOGLE_USER } from '#/__mocks__/googleAuth';
import { SessionProvider } from '@/components/Session';
import useSession from '@/hooks/useSession';

describe('useSession', () => {
  let result: any;

  beforeEach(() => {
    const render = renderHook(() => useSession(), { wrapper: SessionProvider });
    result = render.result;
  });

  it('Should have corresponding methods', () => {
    expect(result.current.signIn).toBeDefined();
    expect(result.current.signOut).toBeDefined();
    expect(result.current.getUserData).toBeDefined();
  });

  it('Should not have user data by default', () => {
    expect(result.current.getUserData()).toEqual(null);
  });

  it('Should have user data after signing in', async () => {
    await act(async () => {
      await result.current.signIn();
    });

    expect(result.current.getUserData()).toEqual(MOCK_GOOGLE_USER);
  });

  it('Should not have user data after signing out', async () => {
    await act(async () => {
      await result.current.signIn();
      await result.current.signOut();
    });

    expect(result.current.getUserData()).toEqual(null);
  });
});
