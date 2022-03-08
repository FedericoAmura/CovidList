import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

import AppImage from '@/assets/icons/AppIcon.png';
import { colors, dimensions, styles as appStyles } from '@/constants/styles';
import testIds from '@/constants/testIds';
import useSession from '@/hooks/useSession';

const Login = () => {
  const { signIn } = useSession();

  return (
    <View style={styles.container} testID={testIds.LOGIN_SCREEN.container}>
      <View style={styles.title}>
        <Image source={AppImage} />
        <Text style={appStyles.TEXT.INTRO}>COVID CASES</Text>
      </View>

      <View style={styles.logins}>
        <TouchableOpacity
          testID={testIds.LOGIN_SCREEN.googleLoginButton}
          onPress={signIn}
          style={[appStyles.BUTTON.PRIMARY, styles.googleLoginButton]}
        >
          <Text style={appStyles.TEXT.OVER}>Sign in with Google</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: dimensions.SPACING.X4,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    flexGrow: 4,
  },
  logins: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    flexGrow: 3,
  },
  googleLoginButton: {
    backgroundColor: colors.PROVIDERS.GOOGLE,
  }
});

Login.propTypes = {};

export default Login;
