import auth, { FirebaseAuthTypes } from '@react-native-firebase/auth';

export const MOCK_GOOGLE_USER = {
  'scopes': ['https://www.googleapis.com/auth/userinfo.profile', 'https://www.googleapis.com/auth/userinfo.email'],
  'serverAuthCode': '4/0AX4XfWgXtJ43hVBBFguL0WII5ZEBxonl4tGNs_rVz38NsLbnimKN_gJ04YGgakJEvw-yHA',
  'idToken': 'eyJhbGciOiJSUzI1NiIsImtpZCI6ImQ2M2RiZTczYWFkODhjODU0ZGUwZDhkNmMwMTRjMzZkYzI1YzQyOTIiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL2FjY291bnRzLmdvb2dsZS5jb20iLCJhenAiOiI4NTIzODk3ODM2MzQtcGhianBiNnBiazVjcXNnZmdwbWQ1MnVyajJrOGs1MDguYXBwcy5nb29nbGV1c2VyY29udGVudC5jb20iLCJhdWQiOiI4NTIzODk3ODM2MzQtdnViYmNyZzY1NTJwbHRyaW0yZmMyMHE3M2ZpZ2RmZ3MuYXBwcy5nb29nbGV1c2VyY29udGVudC5jb20iLCJzdWIiOiIxMDUxMTg2MTE4NzQ0MDE1OTQyNzQiLCJlbWFpbCI6ImZlZGVyaWNvYW11cmFAZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsIm5hbWUiOiJGZWRlcmljbyBBbXVyYSIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS0vQU9oMTRHaGpVTFdKRzVscVV5WE4zcksxajFHVUNiSUxjRE1rbm9qN2RkZHl5ZHM9czk2LWMiLCJnaXZlbl9uYW1lIjoiRmVkZXJpY28iLCJmYW1pbHlfbmFtZSI6IkFtdXJhIiwibG9jYWxlIjoiZW4iLCJpYXQiOjE2NDY3NDkyNzksImV4cCI6MTY0Njc1Mjg3OX0.MJknWfeepTGwf4aszuyUcr1jytVdDsMReHAm1wetBQWMjVCFkoPTGbEDmPEqp83jzrU8TCfISyRnbFq9Z7t9hyUUd1KN_c5CLIQvOMmpFsqJw4MLb3acsS7arFffOIPdNHwZ5kMhxaEEGh_eWiLt9jjtvMniPXcc4KnnGiMGvlW5QPl5Qgn72YsiUHhx2ziSFnClCYhFe9YenI6vcbemj75XiZWD8uVal2yGrN0GBXErF_e7PR6TMkYNUHdUZGrkFR4JufbhYvednoASA6KnGSXXzEn1tZ3KVkJIseesfMYnRlZLz_q7iEitmbLA1aFePy2MLo7SUnRGfDtREerRJA',
  'user': {
    'photo': 'https://lh3.googleusercontent.com/a-/AOh14GhjULWJG5lqUyXN3rK1j1GUCbILcDMknoj7dddyyds=s96-c',
    'email': 'federicoamura@gmail.com',
    'familyName': 'Amura',
    'givenName': 'Federico',
    'name': 'Federico Amura',
    'id': '105118611874401594274',
  },
};

// @ts-ignore
export const MOCK_FIREBASE_USER: FirebaseAuthTypes.User = {
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
          mockAuthStateChangedCallback(MOCK_FIREBASE_USER);
        }
      },
      signOut: async () => {
        if (mockAuthStateChangedCallback) {
          mockAuthStateChangedCallback(null);
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
      signInSilently: jest.fn(),
      signIn: async () => MOCK_GOOGLE_USER,
      revokeAccess: jest.fn(),
      signOut: jest.fn(),
    },
  };
});

export const setSignedInStatus = async (signedInStatus: boolean) => {
  // @ts-ignore
  await (signedInStatus ? auth().signInWithCredential('') : auth().signOut());
};
