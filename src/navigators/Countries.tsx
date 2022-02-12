import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import screens from '../constants/screens';
import CountriesScreen from '../screens/Countries';
import CountryScreen from '../screens/Country';

const Stack = createStackNavigator();

const Countries = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen key={screens.COUNTRIES} name={screens.COUNTRIES} component={CountriesScreen} />
      <Stack.Screen key={screens.COUNTRY} name={screens.COUNTRY} component={CountryScreen} />
    </Stack.Navigator>
  );
};

export default Countries;
