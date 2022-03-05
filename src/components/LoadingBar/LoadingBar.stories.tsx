import React from 'react';
import { storiesOf } from '@storybook/react-native';

import LoadingBar from './LoadingBar';

storiesOf('Components/LoadingBar', module)
  .add('Loading', () => <LoadingBar />);
