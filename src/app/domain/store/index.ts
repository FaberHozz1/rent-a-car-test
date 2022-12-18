import { CarEffects } from './car/car.effects';
import { CarReducers } from './car/car.reducers';
import { ICarState } from './car/car.state';

export interface IRootState {
  car: ICarState;
}

export const RootReducers = {
  car: CarReducers,
};

export const RootEffects = [CarEffects];
