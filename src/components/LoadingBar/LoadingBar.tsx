import React from 'react';
import { Animated, Dimensions, StyleSheet, View } from 'react-native';

import { colors } from '@/constants/styles';
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
      <Animated.View style={[styles.loaded, { left: start }]} />
    </View>
  );
};

const styles = StyleSheet.create({
  loading: {
    width: '100%',
    height: 3,
    backgroundColor: colors.BRAND.BLACK,
  },
  loaded: {
    position: 'absolute',
    height: '100%',
    right: 0,
    backgroundColor: colors.BRAND.LEMON,
  },
});

LoadingBar.propTypes = {};

export default LoadingBar;
