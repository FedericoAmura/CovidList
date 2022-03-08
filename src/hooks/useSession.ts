import { useCallback, useEffect, useContext } from 'react';
import { GoogleSignin } from '@react-native-google-signin/google-signin';

import { SessionContext } from '@/components/Session';

const useSession = () => {
  // @ts-ignore
  const { user, setUser } = useContext(SessionContext);

  useEffect(() => {
    GoogleSignin.configure({
      scopes: ['email'],
      webClientId: '852389783634-vubbcrg6552pltrim2fc20q73figdfgs.apps.googleusercontent.com',
      offlineAccess: true,
    });
    Promise.resolve().then(async () => {
      try {
        const user = await GoogleSignin.signInSilently();
        setUser(user);
      } catch (error: unknown) {
        console.error(error);
      }
    });
  }, [setUser]);

  const signIn = useCallback(async () => {
    try {
      await GoogleSignin.hasPlayServices();
      const user = await GoogleSignin.signIn();
      setUser(user);
    } catch (error: unknown) {
      console.error(error);
    }
  }, [setUser]);

  const signOut = useCallback(async () => {
    try {
      await GoogleSignin.revokeAccess();
      await GoogleSignin.signOut();
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
