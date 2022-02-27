import httpClient from './httpClient';

const COVID_URL = 'https://api.covid19api.com';

export interface Country {
  Country: string;
  Slug: string;
  ISO2: string;
}

export interface DailyData {
  Country: string;
  CountryCode: string;
  Province: string;
  City: string;
  CityCode: string;
  Lat: string;
  Lon: string;
  Cases: number;
  Status: string;
  Date: string;
}

const Covid19Service = {
  async getCountries() {
    const response = await httpClient.get<Country[]>(`${COVID_URL}/countries`);
    return response.data;
  },

  async getCountryDailyData(countrySlug: string) {
    const response = await httpClient.get<DailyData[]>(`${COVID_URL}/total/dayone/country/${countrySlug}/status/confirmed`);
    return response.data;
  },
}

export default Covid19Service;
