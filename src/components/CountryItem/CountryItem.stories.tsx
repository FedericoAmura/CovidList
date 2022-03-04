import React from 'react';
import { storiesOf } from '@storybook/react-native';
import { action } from '@storybook/addon-actions';
import { text } from '@storybook/addon-knobs';

import GridView from '@/components/GridView';
import CountryItem from './CountryItem';

storiesOf('Components/CountryItem', module)
  .addDecorator(getStory => <GridView>{getStory()}</GridView>)
  .add('Some Country Item', () => <CountryItem country={{
    Country: text('Country name', 'Jordan'),
    Slug: text('Country Slug', 'jordan'),
    ISO2: text('Country ISO2', 'JO'),
  }} onPress={action('Clicked Country')} />);
