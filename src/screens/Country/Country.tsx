import React, { useCallback, useEffect, useMemo } from 'react';
import { StyleSheet, View } from 'react-native';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
// @ts-ignore
import { useLoading } from '@rootstrap/redux-tools';
import { object } from 'prop-types';

import { getDailyData } from '@/actions/covid';
import DailyDataItem from '@/components/DailyData';
import FlatTable from '@/components/FlatTable';
import Separator from '@/components/Separator';
import testIds from '@/constants/testIds';
import { DailyData } from '@/services/covid';
import LoadingBar from '@/components/LoadingBar';

// @ts-ignore
const Country = ({ navigation, route: { params: { name, slug } } }) => {
  const dispatch = useDispatch();
  const isLoading = useLoading(getDailyData);

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
      {isLoading && <LoadingBar />}
      <FlatTable style={styles.table} ItemSeparatorComponent={Separator} data={countryDaysData} fields={fields} keyExtractor={countryDayKeyExtractor} renderItem={renderCountryDayItem} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  table: {
    flex: 1,
    width: '100%',
  },
});

Country.propTypes = {
  navigation: object.isRequired,
  route: object.isRequired,
};

export default Country;
