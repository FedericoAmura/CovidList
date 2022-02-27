import React from 'react';
import { Text } from 'react-native';
import renderer, { ReactTestRenderer } from 'react-test-renderer';

import DailyDataItem from '../../../src/components/DailyData';

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
  let render: ReactTestRenderer;

  beforeEach(() => {
    render = renderer.create(<DailyDataItem dailyData={MOCK_DAILY_DATA} />)
  });

  it('Should render correctly', () => {
    const dailyDataItem = render.root.findByType(DailyDataItem);
    expect(dailyDataItem).toBeTruthy();
  });

  it('Should properly show the date and cases', () => {
    const [dateComponent, casesComponent] = render.root.findAllByType(Text);

    expect(dateComponent).toBeTruthy();
    expect(dateComponent.props.children).toEqual('2020-03-08');

    expect(casesComponent).toBeTruthy();
    expect(casesComponent.props.children).toEqual(1);
  });
});
