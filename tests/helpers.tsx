import renderer from 'react-test-renderer';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const TEST_SCREEN = 'TestScreen';
const Stack = createStackNavigator();

const renderOtherScreens = (otherScreens: any[]) => {
  // @ts-ignore
  return otherScreens.map(({ name, component }) => {
    return <Stack.Screen key={name} name={name} component={component} />;
  });
}

export const renderWithNavigation = (component: React.ComponentType<any>, otherScreens?: any[]) => {
  const App = () => (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          key={TEST_SCREEN}
          name={TEST_SCREEN}
          component={component}
        />
        {otherScreens && renderOtherScreens(otherScreens)}
      </Stack.Navigator>
    </NavigationContainer>
  );

  return renderer.create(<App />)
};
