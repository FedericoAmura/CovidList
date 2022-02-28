import React from 'react';
import { Provider } from 'react-redux';
import { NavigationContainer } from '@react-navigation/native';

import configureStore from './configureStore';
import AuthNavigator from './navigators/Auth';

const store = configureStore();

const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <AuthNavigator />
      </NavigationContainer>
    </Provider>
  );
};

export default App;
