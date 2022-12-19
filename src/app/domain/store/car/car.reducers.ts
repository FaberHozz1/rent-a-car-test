import { IFilters } from '@core/interfaces/home.interface';
import { Action, createReducer, on } from '@ngrx/store';
import * as carActions from './car.actions';
import { ICarState } from './car.state';

export const initialCarState: ICarState = {
  isLoading: false,
  carList: [],
  filters: {} as IFilters,
};

const carReducer = createReducer(
  initialCarState,
  on(carActions.initCarList, (state) => ({
    ...state,
    isLoading: true,
    carList: [],
    error: false,
  })),
  on(carActions.getCarList, (state) => ({
    ...state,
    isLoading: true,
    error: false,
  })),
  on(carActions.successGetCarList, (state, { carList }) => ({
    ...state,
    carList,
    isLoading: false,
    error: false,
  })),
  on(carActions.failedGetCarList, (state) => ({
    ...state,
    carList: [],
    isLoading: false,
    error: true,
  })),
  on(carActions.updateCarListFilters, (state, { filters }) => ({
    ...state,
    isLoading: true,
    error: false,
    filters,
  }))
);

export const CarReducers = (state: ICarState | undefined, action: Action) =>
  carReducer(state, action);
