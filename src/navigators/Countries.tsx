import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';

import screens from '@/constants/screens';
import { colors, dimensions, styles as appStyles } from '@/constants/styles';
import testIds from '@/constants/testIds';
import useSession from '@/hooks/useSession';
import CountriesScreen from '@/screens/Countries';
import CountryScreen from '@/screens/Country';

const Stack = createStackNavigator();

// @ts-ignore
const LogOutButton = ({ signOut }) => (
  <TouchableOpacity
    testID={testIds.COUNTRY_NAVIGATOR.signOutButton}
    onPress={signOut}
    style={[appStyles.BUTTON.DANGER, { padding: dimensions.SPACING.X1, marginRight: dimensions.SPACING.X1 }]}
  >
    <Text style={appStyles.TEXT.OVER}>Sign out</Text>
  </TouchableOpacity>
);

const Countries = () => {
  const { signOut } = useSession();

  return (
    <Stack.Navigator screenOptions={{
      headerRight: () => <LogOutButton signOut={signOut} />,
      cardStyle: { backgroundColor: colors.BRAND.WHITE },
    }}>
      <Stack.Screen key={screens.COUNTRIES} name={screens.COUNTRIES} component={CountriesScreen} />
      <Stack.Screen key={screens.COUNTRY} name={screens.COUNTRY} component={CountryScreen} />
    </Stack.Navigator>
  );
};

export default Countries;
