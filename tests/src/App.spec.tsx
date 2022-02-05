import React from 'react';
import 'react-native';
import renderer from 'react-test-renderer';

import App from '../../src/App';

describe('App', () => {
  it('Should render correctly', () => {
    renderer.create(<App />);
  });
});
