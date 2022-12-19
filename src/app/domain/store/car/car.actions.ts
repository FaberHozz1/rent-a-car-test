import { ICar } from '@core/interfaces/car.interface';
import { IFilters } from '@core/interfaces/home.interface';
import { createAction, props } from '@ngrx/store';

export const initCarList = createAction('[Home Facade] Init Car List');

export const getCarList = createAction('[Home Facade] Get Car List');

export const successGetCarList = createAction(
  '[Car Effects] Success Car List',
  props<{ carList: ICar[] }>()
);

export const failedGetCarList = createAction('[Car Effects] Failed Car List');

export const updateCarListFilters = createAction(
  '[Home Facade] Update Car List Filters',
  props<{ filters: IFilters }>()
);
