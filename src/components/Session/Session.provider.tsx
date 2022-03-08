import React, { useState } from 'react';
import { oneOfType, array, node } from 'prop-types';
import { User } from '@react-native-google-signin/google-signin';

import SessionContext from './Session.context';

// @ts-ignore
const SessionProvider = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);

  return (
    // @ts-ignore
    <SessionContext.Provider value={{ user, setUser }}>
      {children}
    </SessionContext.Provider>
  );
};

SessionProvider.prototype = {
  children: oneOfType([array, node])
}

export default SessionProvider;
