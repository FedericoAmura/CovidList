import React from 'react';
import { Text } from 'react-native';
import renderer, { act, ReactTestRenderer } from 'react-test-renderer';

import CountryItem from '../../../src/components/CountryItem';

const MOCK_COUNTRY = {
  Country: "Jordan",
  ISO2: "JO",
  Slug: "jordan",
};

const MOCK_ONPRESS = jest.fn();

describe('CountryItem', () => {
  let render: ReactTestRenderer;

  beforeEach(() => {
    render = renderer.create(<CountryItem country={MOCK_COUNTRY} onPress={MOCK_ONPRESS} />)
  });

  it('Should render correctly', () => {
    const countryItem = render.root.findByType(CountryItem);
    expect(countryItem).toBeTruthy();
  });

  it('Should show the country name and code', () => {
    const countryItemText = render.root.findByType(Text);
    expect(countryItemText).toBeTruthy();
    expect(countryItemText.props.children).toEqual('Jordan (jordan)');
  });

  it('Should call onPress on touch', () => {
    const countryItem = render.root.findByType(CountryItem);

    act(() => {
      countryItem.props.onPress();
    });

    expect(MOCK_ONPRESS).toHaveBeenCalled();
  });
});
