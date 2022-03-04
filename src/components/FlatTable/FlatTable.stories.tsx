import React from 'react';
import { storiesOf } from '@storybook/react-native';
import { text } from '@storybook/addon-knobs';

import FlatTable from './FlatTable';
import DailyDataItem from '../DailyData';

storiesOf('Components/FlatTable', module)
  .add('Table of daily data', () => {
    const MOCK_DATA = [{
      Cases: 1,
      Date: '2020-03-08T00:00:00Z',
    },{
      Cases: 2,
      Date: '2020-03-09T00:00:00Z',
    },{
      Cases: 4,
      Date: '2020-03-10T00:00:00Z',
    },{
      Cases: 3,
      Date: '2020-03-11T00:00:00Z',
    }];

    const MOCK_FIELDS = [{
      name: text('Date Button', 'Date'),
      // @ts-ignore
      comparator: (a, b) => new Date(b.Date) - new Date(a.Date),
    }, {
      name: text('Cases Button', 'Cases'),
      // @ts-ignore
      comparator: (a, b) => a.Cases !== b.Cases ? b.Cases - a.Cases : new Date(b.Date) - new Date(a.Date),
    }];

    const MOCK_KEY_EXTRACTOR = (item: any) => item.Date;

    // @ts-ignore
    const MOCK_RENDER_ITEM = ({ item }) => <DailyDataItem dailyData={item} />;

    return <FlatTable data={MOCK_DATA} fields={MOCK_FIELDS} keyExtractor={MOCK_KEY_EXTRACTOR} renderItem={MOCK_RENDER_ITEM} />;
  });
