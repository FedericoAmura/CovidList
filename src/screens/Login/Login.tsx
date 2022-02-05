import React, { useCallback } from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import { object } from 'prop-types';

import screens from '../../constants/screens';
import testIds from '../../constants/testIds';

// @ts-ignore
const Login = ({ navigation }) => {
  const goToCountriesScreen = useCallback(() => {
    navigation.navigate(screens.COUNTRIES);
  }, [navigation]);

  return (
    <View style={styles.container} testID={testIds.LOGIN_SCREEN.container}>
      <Text style={styles.text}>This is the login screen</Text>
      <Button title="Login" onPress={goToCountriesScreen} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: '#282828',
  },
});

Login.propTypes = {
  navigation: object.isRequired,
};

export default Login;
