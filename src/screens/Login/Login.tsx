import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';

import testIds from '../../constants/testIds';
import useSession from '../../hooks/useSession';

const Login = () => {
  const { signIn } = useSession();

  return (
    <View style={styles.container} testID={testIds.LOGIN_SCREEN.container}>
      <Text style={styles.text}>Welcome to Covid List</Text>

      <Button
        title="Sign in with Google"
        onPress={signIn}
      />
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

Login.propTypes = {};

export default Login;
