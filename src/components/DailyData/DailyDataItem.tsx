import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { object } from 'prop-types';

// @ts-ignore
const DailyDataItem = ({ dailyData }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{dailyData.Date.substring(0, 10)}</Text>
      <Text style={styles.text}>{dailyData.Cases}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    paddingVertical: 16,
    flexDirection: 'row',
  },
  text: {
    color: '#282828',
    flexGrow: 1,
    textAlign: 'center',
  },
});

DailyDataItem.propTypes = {
  dailyData: object.isRequired,
};

export default DailyDataItem;
