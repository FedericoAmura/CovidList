import React from 'react';
import { render as renderComponent, RenderAPI, waitFor } from '@testing-library/react-native';

import DailyDataItem from '../../../src/components/DailyData';
import testIds from '../../../src/constants/testIds';

const MOCK_DAILY_DATA = {
  Cases: 1,
  City: '',
  CityCode: '',
  Country: 'Moldova',
  CountryCode: '',
  Date: '2020-03-08T00:00:00Z',
  Lat: '0',
  Lon: '0',
  Province: '',
  Status: 'confirmed',
};

describe('DailyDataItem', () => {
  let render: RenderAPI;

  beforeEach(async () => {
    await waitFor(() => {
      render = renderComponent(<DailyDataItem dailyData={MOCK_DAILY_DATA} />);
    });
  });

  it('Should render correctly', () => {
    const dailyDataItem = render.getByTestId(testIds.DAILY_DATA_COMPONENT.container);
    expect(dailyDataItem).toBeTruthy();
  });

  it('Should properly show the date and cases', () => {
    const dateComponent = render.getByTestId(testIds.DAILY_DATA_COMPONENT.date);
    expect(dateComponent).toBeTruthy();
    expect(dateComponent.props.children).toEqual('2020-03-08');

    const casesComponent = render.getByTestId(testIds.DAILY_DATA_COMPONENT.cases);
    expect(casesComponent).toBeTruthy();
    expect(casesComponent.props.children).toEqual(1);
  });
});
