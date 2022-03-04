import React from 'react';
import { storiesOf } from '@storybook/react-native';
import { action } from '@storybook/addon-actions';
import { text } from '@storybook/addon-knobs';

import Country from './Country';

storiesOf('Screens/Country', module)
  .add('Generic Country', () => <Country navigation={{ setOptions: action('Navigation options')}} route={{ params: {name: text('Country', 'Jordan'), slug: text('Slug', 'jordan') }}} />);
