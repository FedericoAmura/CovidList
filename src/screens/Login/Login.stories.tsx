import React from 'react';
import { storiesOf } from '@storybook/react-native';

import Login from './Login';

storiesOf('Screens/Login', module)
  .add('Pending login', () => <Login />);
