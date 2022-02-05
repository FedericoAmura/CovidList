import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import screens from '../constants/screens';
import Login from '../screens/Login';
import Countries from '../screens/Countries';
import Country from '../screens/Country';

const Stack = createStackNavigator();

const BasicNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name={screens.LOGIN} component={Login} />
        <Stack.Screen name={screens.COUNTRIES} component={Countries} />
        <Stack.Screen name={screens.COUNTRY} component={Country} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default BasicNavigator;
