import React from 'react';
import { Button } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';

import screens from '@/constants/screens';
import useSession from '@/hooks/useSession';
import CountriesScreen from '@/screens/Countries';
import CountryScreen from '@/screens/Country';

const Stack = createStackNavigator();

const Countries = () => {
  const { signOut } = useSession();

  return (
    <Stack.Navigator screenOptions={{
      headerRight: () => <Button
        testID="logout-button"
        onPress={signOut}
        title="Log Out"
        color="red" />
    }}>
      <Stack.Screen key={screens.COUNTRIES} name={screens.COUNTRIES} component={CountriesScreen} />
      <Stack.Screen key={screens.COUNTRY} name={screens.COUNTRY} component={CountryScreen} />
    </Stack.Navigator>
  );
};

export default Countries;
