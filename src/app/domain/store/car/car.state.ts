import { ICar } from '@core/interfaces/car.interface';
import { IFilters } from '@core/interfaces/home.interface';

export interface ICarState {
  isLoading: boolean;
  carList: ICar[];
  filters: IFilters;
}
