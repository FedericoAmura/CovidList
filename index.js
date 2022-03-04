import './wdyr';
import 'react-native-gesture-handler';
import { AppRegistry } from 'react-native';
import Config from 'react-native-config';
import { name as appName } from './app.json';

import App from './src/App';
import StorybookUI from './storybook';

const app = [Config.LOAD_STORYBOOK, process.env.LOAD_STORYBOOK].includes('true') ? StorybookUI : App;
AppRegistry.registerComponent(appName, () => app);
