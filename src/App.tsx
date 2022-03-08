import React from 'react';
import { Provider } from 'react-redux';
import { NavigationContainer } from '@react-navigation/native';

import { SessionProvider } from '@/components/Session';
import configureStore from '@/configureStore';
import AuthNavigator from '@/navigators/Auth';

const store = configureStore();

const App = () => {
  return (
    <Provider store={store}>
      <SessionProvider>
        <NavigationContainer>
          <AuthNavigator />
        </NavigationContainer>
      </SessionProvider>
    </Provider>
  );
};

export default App;
