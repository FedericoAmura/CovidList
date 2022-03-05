import React from 'react';
import { render as renderComponent, RenderAPI, waitFor } from '@testing-library/react-native';

import LoadingBar from '@/components/LoadingBar';
import testIds from '@/constants/testIds';

describe('LoadingBar', () => {
  let render: RenderAPI;

  beforeEach(async () => {
    await waitFor(() => {
      render = renderComponent(<LoadingBar />);
    });
  });

  it('Should render correctly', () => {
    const dailyDataItem = render.getByTestId(testIds.LOADING_BAR.container);
    expect(dailyDataItem).toBeTruthy();
  });
});
