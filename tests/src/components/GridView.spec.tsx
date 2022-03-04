import React from 'react';
import { Text } from 'react-native';
import { render as renderComponent, RenderAPI, waitFor } from '@testing-library/react-native';

import GridView from '@/components/GridView';
import testIds from '@/constants/testIds';

describe('GridView', () => {
  let render: RenderAPI;

  it('Should render correctly', async () => {
    await waitFor(() => {
      const component = (
        <GridView>
          <Text>Some children text</Text>
        </GridView>
      );

      render = renderComponent(component);
    });

    const gridView = render.getByTestId(testIds.GRID_VIEW.container);
    expect(gridView).toBeTruthy();

    const grid = render.getByTestId(testIds.GRID_VIEW.grid);
    expect(grid).toBeTruthy();

    const squares = render.getAllByTestId(testIds.GRID_VIEW.square);
    expect(squares).toBeTruthy();
    expect(squares).toHaveLength(10 * 10);
  });
});
