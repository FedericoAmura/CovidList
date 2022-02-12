import { useCallback, useEffect, useState } from 'react';
import auth, { FirebaseAuthTypes } from '@react-native-firebase/auth';
import { GoogleSignin } from '@react-native-google-signin/google-signin';
import EncryptedStorage from 'react-native-encrypted-storage';

const useSession = () => {
  const [user, setUser] = useState<FirebaseAuthTypes.User | null>(null);

  useEffect(() => {
    EncryptedStorage.getItem('user').then(userData => {
      if (userData) {
        const user = JSON.parse(userData);
        setUser(user);
      }
    });
  }, [setUser]);

  // @ts-ignore
  const onAuthStateChanged: FirebaseAuthTypes.AuthListenerCallback = useCallback(async (user: FirebaseAuthTypes.User) => {
    await EncryptedStorage.setItem('user', JSON.stringify(user));
    setUser(user);
  }, [setUser]);

  useEffect(() => {
    GoogleSignin.configure({
      scopes: ['email'],
      webClientId: '852389783634-vubbcrg6552pltrim2fc20q73figdfgs.apps.googleusercontent.com',
      offlineAccess: true,
    });
    return auth().onAuthStateChanged(onAuthStateChanged);
  }, []);

  const signIn = useCallback(async () => {
    try {
      await GoogleSignin.hasPlayServices();
      const response = await GoogleSignin.signIn();
      const { idToken } = response;
      const credential = auth.GoogleAuthProvider.credential(idToken);
      await auth().signInWithCredential(credential);
    } catch (error: unknown) {
      console.error(error);
    }
  }, []);

  const signOut = useCallback(async () => {
    try {
      await GoogleSignin.revokeAccess();
      await GoogleSignin.signOut();
      await auth().signOut();
      await EncryptedStorage.removeItem('user');
      setUser(null);
    } catch (error) {
      console.error(error);
    }
  }, [setUser]);

  const getUserData = useCallback(() => {
    return user;
  }, [user]);

  return {
    signIn,
    signOut,
    getUserData,
  };
};

export default useSession;
