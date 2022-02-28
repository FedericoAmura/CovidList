import { combineReducers } from 'redux';
// @ts-ignore
import { statusReducer } from '@rootstrap/redux-tools';

import covid from './covid';

const AppReducer = combineReducers({
  covid,
  statusReducer,
});

export default AppReducer;
