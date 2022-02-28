// @ts-ignore
import { createReducer } from '@rootstrap/redux-tools';

import { getCountries, getDailyData } from '../actions/covid';

const initialState = {
  countries: [],
  dailyData: {},
};

// @ts-ignore
const handleGetCountriesSuccess = (state, { payload }) => {
  state.countries = payload;
};

// @ts-ignore
const handleGetDailyDataSuccess = (state, { payload }) => {
  const country = payload[0].Country;

  state.dailyData[country] = payload;
};

export default createReducer(initialState, {
  [getCountries.success]: handleGetCountriesSuccess,
  [getDailyData.success]: handleGetDailyDataSuccess
});
