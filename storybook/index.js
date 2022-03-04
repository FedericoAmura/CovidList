import React from 'react';
import { AppRegistry, Platform } from 'react-native';
import { Provider } from 'react-redux';
import AsyncStorage from '@react-native-community/async-storage';
import { getStorybookUI, configure, addDecorator } from '@storybook/react-native';
import { withKnobs } from '@storybook/addon-knobs';

import configureStore from '../src/configureStore';

import { loadStories } from './storyLoader';
import './rn-addons';

// enables knobs for all stories
addDecorator(withKnobs);

// adds store for all stories
addDecorator(getStory => {
  const store = configureStore();
  return (
    <Provider store={store}>
      {getStory()}
    </Provider>
  );
});

// import stories
configure(() => {
  loadStories();
}, module);

const StorybookUIRoot = getStorybookUI({
  host: Platform.OS === 'android' ? '10.0.2.2' : '0.0.0.0',
  asyncStorage: AsyncStorage,
});

AppRegistry.registerComponent('%APP_NAME%', () => StorybookUIRoot);

export default StorybookUIRoot;
