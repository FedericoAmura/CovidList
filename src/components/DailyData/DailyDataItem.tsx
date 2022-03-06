import React, { memo } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { object } from 'prop-types';

import { dimensions, styles as appStyles } from '@/constants/styles';
import testIds from '@/constants/testIds';

// @ts-ignore
const DailyDataItem = ({ dailyData }) => {
  return (
    <View testID={testIds.DAILY_DATA_COMPONENT.container} style={styles.container}>
      <Text testID={testIds.DAILY_DATA_COMPONENT.date} style={[appStyles.TEXT.COMMON, styles.data]}>{dailyData.Date.substring(0, 10)}</Text>
      <Text testID={testIds.DAILY_DATA_COMPONENT.cases} style={[appStyles.TEXT.COMMON, styles.data]}>{dailyData.Cases}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    paddingVertical: dimensions.SPACING.X2,
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  data: {
    width: '50%',
    textAlign: 'center',
  },
});

DailyDataItem.propTypes = {
  dailyData: object.isRequired,
};

export default memo(DailyDataItem);
