import { IMock } from '@core/interfaces/mock.interface';
import { MOCK_CARS } from '@data/mocks/cars.mock';
import { URLS_API } from './url-api.constant';

export const ROUTES_MOCK: IMock[] = [
  {
    url: URLS_API.GET_CARS,
    data: MOCK_CARS,
    method: 'GET',
  },
];
