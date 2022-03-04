import React, { useCallback, useEffect, useMemo } from 'react';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import { StyleSheet, View } from 'react-native';
import { object } from 'prop-types';

import { getDailyData } from '@/actions/covid';
import DailyDataItem from '@/components/DailyData';
import FlatTable from '@/components/FlatTable';
import testIds from '@/constants/testIds';
import { DailyData } from '@/services/covid';

// @ts-ignore
const Country = ({ navigation, route: { params: { name, slug } } }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    navigation.setOptions({
      headerTitle: name,
    });
  }, []);

  useEffect(() => {
    dispatch(getDailyData(slug));
  }, [dispatch]);

  // @ts-ignore
  const countryDaysData = useSelector(({ covid }) => covid.dailyData[name], shallowEqual) || [];

  const countryDayKeyExtractor = useCallback((dailyData: DailyData) => dailyData.Date, []);
  const renderCountryDayItem = useCallback(({ item }) => <DailyDataItem dailyData={item} />,[]);
  const fields = useMemo(() => [{
    name: 'Date',
    // @ts-ignore
    comparator: (a, b) => new Date(b.Date) - new Date(a.Date),
  }, {
    name: 'Cases',
    // @ts-ignore
    comparator: (a, b) => a.Cases !== b.Cases ? b.Cases - a.Cases : new Date(b.Date) - new Date(a.Date),
  }], []);

  return (
    <View style={styles.container} testID={testIds.COUNTRY_SCREEN.container}>
      <FlatTable style={styles.table} data={countryDaysData} fields={fields} keyExtractor={countryDayKeyExtractor} renderItem={renderCountryDayItem} />
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
  table: {
    width: '100%',
    flex: 1,
  },
});

Country.propTypes = {
  navigation: object.isRequired,
  route: object.isRequired,
};

export default Country;
