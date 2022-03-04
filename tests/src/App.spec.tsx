import React from 'react';
import 'react-native';
import { render } from '@testing-library/react-native';

import App from '@/App';

describe('App', () => {
  it('Should render correctly', () => {
    render(<App />);
  });
});
