import React, { useCallback, useEffect, useState } from 'react';
import { FlatList, StyleSheet, View } from 'react-native';
import { object } from 'prop-types';

import CountryItem from '../../components/CountryItem';
import screens from '../../constants/screens';
import testIds from '../../constants/testIds';
import covidService, { Country } from '../../services/covid19';

// @ts-ignore
const Countries = ({ navigation }) => {
  const [countries, setCountries] = useState<Country[]>([]);

  useEffect(() => {
    covidService.getCountries().then(setCountries);
  }, [setCountries]);

  const goToCountryScreen = useCallback((title: string, slug: string) => {
    navigation.navigate(screens.COUNTRY, { title, slug });
  }, [navigation]);

  const countryKeyExtractor = useCallback((country: Country) => country.Slug, [])
  const renderCountryItem = useCallback(({ item }) => <CountryItem country={item} onPress={() => goToCountryScreen(item.Country, item.Slug)} />,[]);

  return (
    <View style={styles.container} testID={testIds.COUNTRIES_SCREEN.container}>
      <FlatList style={styles.countryList} data={countries} keyExtractor={countryKeyExtractor} renderItem={renderCountryItem} />
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
  countryList: {
    flex: 1,
    width: '100%',
  },
});

Countries.propTypes = {
  navigation: object.isRequired,
};

export default Countries;
