import React from 'react';
import { storiesOf } from '@storybook/react-native';
import { action } from '@storybook/addon-actions';

import Countries from './Countries';

storiesOf('Screens/Countries', module)
  .add('All Countries', () => <Countries navigation={{ navigate: action('Navigation navigate')}} />);
