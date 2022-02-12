import React, { useCallback } from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import { object } from 'prop-types';

import screens from '../../constants/screens';
import testIds from '../../constants/testIds';
import useSession from '../../hooks/useSession';

// @ts-ignore
const Countries = ({ navigation }) => {
  const { signOut } = useSession();

  const goToCountryScreen = useCallback(() => {
    navigation.navigate(screens.COUNTRY);
  }, [navigation]);

  return (
    <View style={styles.container} testID={testIds.COUNTRIES_SCREEN.container}>
      <Text style={styles.text}>This is the countries screen</Text>
      <Button testID="country-button" title="Country" onPress={goToCountryScreen} />
      <View>
        <Button
          testID="logout-button"
          onPress={signOut}
          title="LogOut"
          color="red" />
      </View>
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

Countries.propTypes = {
  navigation: object.isRequired,
};

export default Countries;
