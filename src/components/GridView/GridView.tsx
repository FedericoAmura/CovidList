import React from 'react';
import { StyleSheet, View } from 'react-native';
import { node, number as numberProp } from 'prop-types';

import { colors } from '@/constants/styles';
import testIds from '@/constants/testIds';

// @ts-ignore
const GridView = ({ children, rows = 10, columns = 10 }) => {
  return (
    <View testID={testIds.GRID_VIEW.container} style={styles.container}>
      <View testID={testIds.GRID_VIEW.grid} style={styles.grid}>
        {Array(rows).fill(0).map((_, i) => (
          <View key={`row-${i}`} style={styles.row}>
            {Array(columns).fill(0).map((_, i) => (
              <View key={`sq-${i}`} testID={testIds.GRID_VIEW.square} style={styles.square} />
            ))}
          </View>
        )
      )}
      </View>
      <View testID={testIds.GRID_VIEW.children}>{children}</View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.BRAND.WHITE,
  },
  grid: {
    flex: 1,
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
  },
  row: {
    flex: 1,
    flexDirection: 'row',
  },
  square: {
    flex: 1,
    borderWidth: 1,
    borderColor: colors.BRAND.GRAY,
  },
});

GridView.propTypes = {
  children: node,
  rows: numberProp,
  columns: numberProp,
};

export default GridView;
