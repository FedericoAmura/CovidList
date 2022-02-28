import { applyMiddleware, createStore, Store } from 'redux';
// @ts-ignore
import { thunkMiddleware } from '@rootstrap/redux-tools';

import rootReducer from './reducers';

const middlewares = [thunkMiddleware];

if (__DEV__) {
  const createDebugger = require('redux-flipper').default;
  middlewares.push(createDebugger());
}

export default function configureStore(preloadedState: any = {}): Store {
  return createStore(rootReducer, preloadedState, applyMiddleware(...middlewares));
}
