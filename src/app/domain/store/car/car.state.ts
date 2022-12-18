import { ICar } from '@core/interfaces/car.interface';

export interface ICarState {
  isLoading: boolean;
  carList: ICar[];
}
