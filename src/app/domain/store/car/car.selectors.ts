import { ICar } from '@core/interfaces/car.interface';
import { IFilters } from '@core/interfaces/home.interface';
import { createFeatureSelector, createSelector } from '@ngrx/store';

import { ICarState } from './car.state';

export const getAppFeatureState = createFeatureSelector('car');

export const selectIsLoading = createSelector<any, any, boolean>(
  getAppFeatureState,
  (state: ICarState) => state.isLoading
);

export const selectCarList = createSelector<any, any, ICar[]>(
  getAppFeatureState,
  (state: ICarState) => state.carList
);

export const selectCarListFilters = createSelector<any, any, IFilters>(
  getAppFeatureState,
  (state: ICarState) => state.filters
);
