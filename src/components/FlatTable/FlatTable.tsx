import React, { useCallback, useState } from 'react';
import { Button, FlatList, StyleSheet, View, ViewPropTypes } from 'react-native';
import { array, func } from 'prop-types';

// @ts-ignore
const FlatTable = ({ style = {}, data: parentData, fields, keyExtractor, renderItem}) => {
  const data = [...parentData];

  const [sortingField, setSortingField] = useState({ field: 0, descending: true });
  const sortData = useCallback(field => setSortingField(oldField => ({ field, descending: oldField.field === field ? !oldField.descending : oldField.descending })), [setSortingField]);
  const headerButtons = fields.map((field: any, i: number) => {
    const selectedField = fields[sortingField.field];
    const buttonTitle = selectedField.name !== field.name ? field.name : `${field.name} (${sortingField.descending ? 'desc' : 'asc'})`;
    return (
      <View key={field.name} style={styles.headerButtons}>
        <Button title={buttonTitle} onPress={() => sortData(i)} />
      </View>
    );
  });

  // @ts-ignore
  data.sort((a, b) => (sortingField.descending ? 1 : -1) * fields[sortingField.field].comparator(a, b));

  return (
    <View style={style}>
      <View style={styles.header}>
        {headerButtons}
      </View>
      <FlatList style={styles.dailyList} data={data} keyExtractor={keyExtractor} renderItem={renderItem} />
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
  },
  headerButtons: {
    flexGrow: 1,
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
  },
  dailyList: {
    flex: 1,
  },
});

FlatTable.propTypes = {
  style: ViewPropTypes.style,
  data: array.isRequired,
  fields: array.isRequired,
  keyExtractor: func.isRequired,
  renderItem: func.isRequired,
};

export default FlatTable;
