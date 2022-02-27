import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity } from 'react-native';
import { func, object } from 'prop-types';

import ArrowIcon from '../../assets/icons/ArrowIcon.png';

// @ts-ignore
const CountryItem = ({ country, onPress }) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <Text style={styles.text}>{`${country.Country} (${country.Slug})`}</Text>
      <Image source={ArrowIcon} />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    padding: 32,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  text: {
    color: '#282828',
  },
});

CountryItem.propTypes = {
  country: object.isRequired,
  onPress: func.isRequired,
};

export default CountryItem;
