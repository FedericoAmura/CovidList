// @ts-ignore
import { createThunk } from '@rootstrap/redux-tools';

import covidService from '../services/covid';

export const getCountries = createThunk(
  'GET_COUNTRIES',
  () => covidService.getCountries(),
);

export const getDailyData = createThunk(
  'GET_COUNTRY_DAILY_DATA',
  (slug: string) => covidService.getCountryDailyData(slug),
);
