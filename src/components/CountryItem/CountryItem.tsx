import React, { memo } from 'react';
import { Image, StyleSheet, Text, TouchableOpacity } from 'react-native';
import { func, object } from 'prop-types';

import ArrowIcon from '@/assets/icons/ArrowIcon.png';
import { dimensions, styles as appStyles } from '@/constants/styles';
import testIds from '@/constants/testIds';

// @ts-ignore
const CountryItem = ({ country, onPress }) => {
  return (
    <TouchableOpacity testID={testIds.COUNTRY_ITEM_COMPONENT.container} style={styles.container} onPress={onPress}>
      <Text testID={testIds.COUNTRY_ITEM_COMPONENT.text} style={appStyles.TEXT.COMMON}>{`${country.Country} (${country.Slug})`}</Text>
      <Image testID={testIds.COUNTRY_ITEM_COMPONENT.arrow} source={ArrowIcon} />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    padding: dimensions.SPACING.X4,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});

CountryItem.propTypes = {
  country: object.isRequired,
  onPress: func.isRequired,
};

export default memo(CountryItem);
