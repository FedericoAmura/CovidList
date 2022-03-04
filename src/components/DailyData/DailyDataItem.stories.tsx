import React from 'react';
import { storiesOf } from '@storybook/react-native';
import { date, number } from '@storybook/addon-knobs';

import GridView from '@/components/GridView';
import DailyDataItem from './DailyDataItem';

storiesOf('Components/DailyDataItem', module)
  .addDecorator(getStory => <GridView>{getStory()}</GridView>)
  .add('Someday Item', () => <DailyDataItem dailyData={{
    Date: new Date(date('Date', new Date())).toISOString(),
    Cases: number('Cases', 1234),
  }} />);
