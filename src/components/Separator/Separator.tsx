import React, { memo } from 'react';
import { StyleSheet, View } from 'react-native';

import { colors, dimensions } from '@/constants/styles';
import testIds from '@/constants/testIds';

// @ts-ignore
const Separator = () => {
  return (
    <View testID={testIds.SEPARATOR.container} style={styles.container}>
      <View style={styles.divider} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 1,
    paddingHorizontal: dimensions.SPACING.X3,
  },
  divider: {
    width: '100%',
    height: '100%',
    backgroundColor: colors.BRAND.GRAY,
  },
});

Separator.propTypes = {};

export default memo(Separator);
