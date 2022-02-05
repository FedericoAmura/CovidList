import React, { useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { object } from 'prop-types';

import testIds from '../../constants/testIds';

// @ts-ignore
const Country = ({ navigation }) => {
  useEffect(() => {
    navigation.setOptions({
      headerShown: true,
    });
  }, [navigation]);

  return (
    <View style={styles.container} testID={testIds.COUNTRY_SCREEN.container}>
      <Text style={styles.text}>This is the country screen</Text>
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

Country.propTypes = {
  navigation: object.isRequired,
};

export default Country;
