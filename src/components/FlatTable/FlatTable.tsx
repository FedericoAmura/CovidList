import React, { useCallback, useState } from 'react';
import { FlatList, StyleSheet, Text, TouchableOpacity, View, ViewPropTypes } from 'react-native';
import { array, func, object } from 'prop-types';

import testIds from '@/constants/testIds';
import { colors, dimensions, styles as appStyles } from '@/constants/styles';

const DEFAULT_STYLE = {
  flex: 1,
};

// @ts-ignore
const FlatTable = ({ style = DEFAULT_STYLE, ItemSeparatorComponent, data: parentData, fields, keyExtractor, renderItem}) => {
  const data = [...parentData];

  const [sortingField, setSortingField] = useState({ field: 0, descending: true });
  const sortData = useCallback(field => setSortingField(oldField => ({ field, descending: oldField.field === field ? !oldField.descending : oldField.descending })), [setSortingField]);
  const headerButtons = fields.map((field: any, i: number) => {
    const selectedField = fields[sortingField.field];
    const buttonTitle = selectedField.name !== field.name ? field.name : `${field.name} (${sortingField.descending ? 'desc' : 'asc'})`;
    return (
      // @ts-ignore
      <TouchableOpacity testID={testIds.FLAT_TABLE_COMPONENT.headerButton} style={styles.headerButton(50)} onPress={() => sortData(i)}>
        <Text style={[appStyles.TEXT.COMMON, styles.headerButtonText]}>{buttonTitle}</Text>
      </TouchableOpacity>
    );
  });

  // @ts-ignore
  data.sort((a, b) => (sortingField.descending ? 1 : -1) * fields[sortingField.field].comparator(a, b));

  return (
    <View testID={testIds.FLAT_TABLE_COMPONENT.container} style={style}>
      <View style={styles.header}>
        {headerButtons}
      </View>
      <FlatList testID={testIds.FLAT_TABLE_COMPONENT.dataRows} style={styles.flatList} ItemSeparatorComponent={ItemSeparatorComponent} data={data} keyExtractor={keyExtractor} renderItem={renderItem} />
    </View>
  );
};

const styles = StyleSheet.create({
  table: {
    width: '100%',
    flex: 1,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: colors.BRAND.LIGHTBLUE,
  },
  // @ts-ignore
  headerButton: (buttonWidthPercent: number) => ({
    width: `${buttonWidthPercent}%`,
    borderWidth: 1,
    borderColor: colors.BRAND.GRAY,
    padding: dimensions.SPACING.X2,
    justifyContent: 'center',
  }),
  headerButtonText: {
    textAlign: 'center',
  },
  flatList: {
    flex: 1,
  },
});

FlatTable.propTypes = {
  style: ViewPropTypes.style,
  ItemSeparatorComponent: object,
  data: array.isRequired,
  fields: array.isRequired,
  keyExtractor: func.isRequired,
  renderItem: func.isRequired,
};

export default FlatTable;
