import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import navigators from '@/constants/navigators';
import { colors } from '@/constants/styles';
import screens from '@/constants/screens';
import useSession from '@/hooks/useSession';
import Login from '@/screens/Login';
import Countries from '@/navigators/Countries';

const Stack = createStackNavigator();

const Auth = () => {
  const { getUserData } = useSession();
  const isSignedIn = !!getUserData();

  return (
      <Stack.Navigator screenOptions={{
        headerShown: false,
        cardStyle: { backgroundColor: colors.BRAND.WHITE },
      }}>
        {!isSignedIn ? (
          <Stack.Screen key={screens.LOGIN} name={screens.LOGIN} component={Login} />
        ) : (
          <Stack.Screen key={navigators.COUNTRY} name={navigators.COUNTRY} component={Countries} />
        )}
      </Stack.Navigator>
  );
};

export default Auth;
