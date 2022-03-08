import React from 'react';
import { render as renderComponent, RenderAPI, waitFor } from '@testing-library/react-native';

import Separator from '@/components/Separator';
import testIds from '@/constants/testIds';

describe('LoadingBar', () => {
  let render: RenderAPI;

  beforeEach(async () => {
    await waitFor(() => {
      render = renderComponent(<Separator />);
    });
  });

  it('Should render correctly', () => {
    const dailyDataItem = render.getByTestId(testIds.SEPARATOR.container);
    expect(dailyDataItem).toBeTruthy();
  });
});
