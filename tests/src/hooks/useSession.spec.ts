import { renderHook, act } from '@testing-library/react-hooks';

import useSession from '../../../src/hooks/useSession';

// @ts-ignore
const MOCK_USER: FirebaseAuthTypes.User = {
  'metadata': { 'lastSignInTime': '1645404293147', 'creationTime': '1644281920208' },
  'phoneNumber': null,
  'displayName': 'Federico Amura',
  'isAnonymous': false,
  'providerData': [{
    'email': 'federicoamura@gmail.com',
    'phoneNumber': '+12345678',
    'uid': '105118611874401594274',
    'photoURL': 'https://lh3.googleusercontent.com/a-/AOh14GhjULWJG5lqUyXN3rK1j1GUCbILcDMknoj7dddyyds=s96-c',
    'displayName': 'Federico Amura',
    'providerId': 'google.com',
  }],
  'email': 'federicoamura@gmail.com',
  'emailVerified': true,
  'providerId': 'firebase',
  'photoURL': 'https://lh3.googleusercontent.com/a-/AOh14GhjULWJG5lqUyXN3rK1j1GUCbILcDMknoj7dddyyds=s96-c',
  'uid': 'dIvUkhACbccHRjZ8GewWRSFtqdi1',
};

describe('useSession', () => {
  it('Should have corresponding methods', () => {
    const { result } = renderHook(() => useSession());

    expect(result.current.signIn).toBeDefined();
    expect(result.current.signOut).toBeDefined();
    expect(result.current.getUserData).toBeDefined();
  });

  it('Should not have user data by default', () => {
    const { result } = renderHook(() => useSession());

    expect(result.current.getUserData()).toEqual(null);
  });

  it('Should have user data after signing in', async () => {
    const { result } = renderHook(() => useSession());

    await act(async () => {
      await result.current.signIn();
    });

    expect(result.current.getUserData()).toEqual(MOCK_USER);
  });

  it('Should not have user data after signing out', async () => {
    const { result } = renderHook(() => useSession());

    await act(async () => {
      await result.current.signIn();
      await result.current.signOut();
    });

    expect(result.current.getUserData()).toEqual(null);
  });
});
