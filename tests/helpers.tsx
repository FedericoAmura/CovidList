import React from 'react';
import { Provider } from 'react-redux';
import renderer from 'react-test-renderer';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import configureStore from '../src/configureStore';

const TEST_SCREEN = 'TestScreen';
const Stack = createStackNavigator();

const renderOtherScreens = (otherScreens: any[]) => {
  // @ts-ignore
  return otherScreens.map(({ name, component }) => {
    return <Stack.Screen key={name} name={name} component={component} />;
  });
}

export const renderWithNavigation = (component: React.ComponentType<any>, componentParams: any = {}, otherScreens?: any[], preloadedState?: any) => {
  const store = configureStore(preloadedState);

  const App = () => (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            key={TEST_SCREEN}
            name={TEST_SCREEN}
            component={component}
            initialParams={componentParams}
          />
          {otherScreens && renderOtherScreens(otherScreens)}
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );

  return renderer.create(<App />)
};
