import React from 'react';
import { Animated, Dimensions, StyleSheet, View } from 'react-native';

import testIds from '@/constants/testIds';

const LoadingBar = () => {
  const windowWidth = Dimensions.get('window').width;
  const start = new Animated.Value(0);

  Animated.loop(Animated.timing(start, {
    toValue: windowWidth,
    duration: 1000,
    useNativeDriver: false,
  })).start();

  return (
    <View testID={testIds.LOADING_BAR.container} style={styles.loading}>
      <Animated.View style={[styles.loaded, { left: start, right: 0 }]} />
    </View>
  );
};

const styles = StyleSheet.create({
  loading: {
    width: '100%',
    height: 3,
    backgroundColor: '#000',
  },
  loaded: {
    position: 'absolute',
    height: '100%',
    backgroundColor: '#86ff2e',
  },
});

LoadingBar.propTypes = {};

export default LoadingBar;
