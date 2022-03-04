import React from 'react';
import { Text } from 'react-native';
import { storiesOf } from '@storybook/react-native';
import { number, text } from '@storybook/addon-knobs';

import GridView from './GridView';

const POSITIVE = {
  min: 0,
};

storiesOf('Components/GridView', module)
  .add('With children', () => (
    <GridView rows={number('Rows', 10, POSITIVE)} columns={number('Columns', 10, POSITIVE)}>
      <Text>{text('Text', 'Some children text')}</Text>
    </GridView>
  ))
  .add('Without children', () => (
    <GridView rows={number('Rows', 10, POSITIVE)} columns={number('Columns', 10, POSITIVE)} />
  ));
