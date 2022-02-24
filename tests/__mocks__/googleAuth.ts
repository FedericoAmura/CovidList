import auth, { FirebaseAuthTypes } from '@react-native-firebase/auth';

// @ts-ignore
export const MOCK_USER: FirebaseAuthTypes.User = {
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

let mockAuthStateChangedCallback: FirebaseAuthTypes.AuthListenerCallback;

jest.mock('@react-native-firebase/auth', () => {
  const mock = {
    __esModule: true,
    default: () => ({
      onAuthStateChanged: (callback: () => void) => mockAuthStateChangedCallback = callback,
      signInWithCredential: async () => {
        if (mockAuthStateChangedCallback) {
          await mockAuthStateChangedCallback(MOCK_USER);
        }
      },
      signOut: async () => {
        if (mockAuthStateChangedCallback) {
          await mockAuthStateChangedCallback(null);
        }
      },
    }),
  };

  // @ts-ignore
  mock.default.GoogleAuthProvider = {
    credential: () => 'credential',
  };

  return mock;
});

jest.mock('@react-native-google-signin/google-signin', () => {
  return {
    GoogleSignin: {
      configure: jest.fn(),
      hasPlayServices: jest.fn(),
      signIn: async () => ({ idToken: 'idToken' }),
      revokeAccess: jest.fn(),
      signOut: jest.fn(),
    },
  };
});

export const setSignedInStatus = async (signedInStatus: boolean) => {
  // @ts-ignore
  await (signedInStatus ? auth().signInWithCredential('') : auth().signOut());
};
