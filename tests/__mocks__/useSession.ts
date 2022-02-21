import { FirebaseAuthTypes } from '@react-native-firebase/auth';

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

let mockSignedInUser = false;

jest.mock('../../src/hooks/useSession', () => ({
  __esModule: true,
  default: () => ({
    signIn: jest.fn(),
    signOut: jest.fn(),
    getUserData: () => mockSignedInUser ? MOCK_USER : null,
  }),
}));

export const setSignedInStatus = (signedInStatus: boolean) => {
  mockSignedInUser = signedInStatus;
};
