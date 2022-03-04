import React from 'react';
import { fireEvent, render as renderComponent, RenderAPI, waitFor } from '@testing-library/react-native';

import CountryItem from '@/components/CountryItem';
import testIds from '@/constants/testIds';

const MOCK_COUNTRY = {
  Country: "Jordan",
  ISO2: "JO",
  Slug: "jordan",
};

const MOCK_ONPRESS = jest.fn();

describe('CountryItem', () => {
  let render: RenderAPI;

  beforeEach(async () => {
    await waitFor(() => {
      render = renderComponent(<CountryItem country={MOCK_COUNTRY} onPress={MOCK_ONPRESS} />);
    });
  });

  it('Should render correctly', () => {
    const countryItem = render.getByTestId(testIds.COUNTRY_ITEM_COMPONENT.container);
    expect(countryItem).toBeTruthy();

    const countryItemText = render.getByTestId(testIds.COUNTRY_ITEM_COMPONENT.text);
    expect(countryItemText).toBeTruthy();

    const countryItemArrow = render.getByTestId(testIds.COUNTRY_ITEM_COMPONENT.arrow);
    expect(countryItemArrow).toBeTruthy();
  });

  it('Should show the country name and code', () => {
    const countryItemText = render.getByTestId(testIds.COUNTRY_ITEM_COMPONENT.text);
    expect(countryItemText).toBeTruthy();
    expect(countryItemText.props.children).toEqual('Jordan (jordan)');
  });

  it('Should call onPress on touch', () => {
    const countryItem = render.getByTestId(testIds.COUNTRY_ITEM_COMPONENT.container);
    fireEvent.press(countryItem);

    expect(MOCK_ONPRESS).toHaveBeenCalled();
  });
});
