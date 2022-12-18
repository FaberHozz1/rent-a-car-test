import { Action, createReducer, on } from '@ngrx/store';
import * as carActions from './car.actions';
import { ICarState } from './car.state';

export const initialCarState: ICarState = {
  isLoading: false,
  carList: [],
};

const carReducer = createReducer(
  initialCarState,
  on(carActions.initCarList, (state) => ({
    ...state,
    isLoading: true,
    carList: [],
  })),
  on(carActions.getCarList, (state) => ({
    ...state,
    isLoading: true,
  })),
  on(carActions.successGetCarList, (state, { carList }) => ({
    ...state,
    carList,
    isLoading: false,
  }))
);

export const CarReducers = (state: ICarState | undefined, action: Action) =>
  carReducer(state, action);
