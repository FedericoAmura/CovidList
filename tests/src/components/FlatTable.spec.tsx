import React from 'react';
import { Text } from 'react-native';
import { fireEvent, render as renderComponent, RenderAPI, waitFor } from '@testing-library/react-native';

import DailyDataItem from '@/components/DailyData';
import FlatTable from '@/components/FlatTable';
import testIds from '@/constants/testIds';

const MOCK_DATA = [{
  Cases: 1,
  Date: '2020-03-08T00:00:00Z',
},{
  Cases: 2,
  Date: '2020-03-09T00:00:00Z',
},{
  Cases: 4,
  Date: '2020-03-10T00:00:00Z',
},{
  Cases: 3,
  Date: '2020-03-11T00:00:00Z',
}];

const MOCK_FIELDS = [{
  name: 'Date',
  // @ts-ignore
  comparator: (a, b) => new Date(b.Date) - new Date(a.Date),
}, {
  name: 'Cases',
  // @ts-ignore
  comparator: (a, b) => a.Cases !== b.Cases ? b.Cases - a.Cases : new Date(b.Date) - new Date(a.Date),
}];

const MOCK_KEY_EXTRACTOR = (item: any) => item.Date;

// @ts-ignore
const MOCK_RENDER_ITEM = ({ item }) => <DailyDataItem dailyData={item} />;

describe('FlatTable', () => {
  let render: RenderAPI;

  beforeEach(async () => {
    await waitFor(() => {
      render = renderComponent(<FlatTable data={MOCK_DATA} fields={MOCK_FIELDS} keyExtractor={MOCK_KEY_EXTRACTOR} renderItem={MOCK_RENDER_ITEM} />);
    });
  });

  it('Should render correctly', () => {
    const flatTable = render.getByTestId(testIds.FLAT_TABLE_COMPONENT.container);
    expect(flatTable).toBeTruthy();
  });

  it('Should render header buttons', () => {
    const [dateButton, casesButton] = render.getAllByTestId(testIds.FLAT_TABLE_COMPONENT.headerButton);

    expect(dateButton).toBeTruthy();
    expect(casesButton).toBeTruthy();
  });

  it('Should render data rows', () => {
    const dataRows = render.getByTestId(testIds.FLAT_TABLE_COMPONENT.dataRows);
    expect(dataRows).toBeTruthy();

    const dailyDataRows = render.getAllByTestId(testIds.DAILY_DATA_COMPONENT.container);
    expect(dailyDataRows).toBeTruthy();
    expect(dailyDataRows).toHaveLength(4);
  });

  it('Should sort data rows when clicking header buttons', () => {
    const [, casesButton] = render.getAllByTestId(testIds.FLAT_TABLE_COMPONENT.headerButton);
    fireEvent.press(casesButton);

    let dailyDataRows = render.getAllByTestId(testIds.DAILY_DATA_COMPONENT.container);
    expect(dailyDataRows.map(row => {
      const rowCasesText = row.findAllByType(Text)[1];
      return rowCasesText.props.children;
    })).toEqual([4, 3, 2, 1]);

    fireEvent.press(casesButton);

    dailyDataRows = render.getAllByTestId(testIds.DAILY_DATA_COMPONENT.container);
    expect(dailyDataRows.map(row => {
      const rowCasesText = row.findAllByType(Text)[1];
      return rowCasesText.props.children;
    })).toEqual([1, 2, 3, 4]);
  });
});
