const mockCountries = [{
  Country: 'Jordan',
  ISO2: 'JO',
  Slug: 'jordan',
}];

const mockCountryDailyDate = [
  {
    "Country": "Jordan",
    "CountryCode": "",
    "Province": "",
    "City": "",
    "CityCode": "",
    "Lat": "0",
    "Lon": "0",
    "Cases": 1,
    "Status": "confirmed",
    "Date": "2020-03-03T00:00:00Z"
  },
  {
    "Country": "Jordan",
    "CountryCode": "",
    "Province": "",
    "City": "",
    "CityCode": "",
    "Lat": "0",
    "Lon": "0",
    "Cases": 2,
    "Status": "confirmed",
    "Date": "2020-03-04T00:00:00Z"
  },
  {
    "Country": "Jordan",
    "CountryCode": "",
    "Province": "",
    "City": "",
    "CityCode": "",
    "Lat": "0",
    "Lon": "0",
    "Cases": 4,
    "Status": "confirmed",
    "Date": "2020-03-05T00:00:00Z"
  },
  {
    "Country": "Jordan",
    "CountryCode": "",
    "Province": "",
    "City": "",
    "CityCode": "",
    "Lat": "0",
    "Lon": "0",
    "Cases": 3,
    "Status": "confirmed",
    "Date": "2020-03-06T00:00:00Z"
  },
];

jest.mock('axios', () => ({
  __esModule: true,
  default: {
    create: () => ({
      get: (url: string) => ({ data: url.indexOf('/countries') > 0 ? mockCountries : mockCountryDailyDate }),
    }),
  },
}));

export {};
