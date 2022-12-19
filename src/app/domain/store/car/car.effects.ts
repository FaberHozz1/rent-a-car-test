import { Injectable } from '@angular/core';
import { ICar } from '@core/interfaces/car.interface';
import { IFilters } from '@core/interfaces/home.interface';
import { CarApi } from '@data/apis/car.api';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { of } from 'rxjs';
import { catchError, map, switchMap, withLatestFrom } from 'rxjs/operators';

import * as carActions from './car.actions';
import * as carSelectors from './car.selectors';

@Injectable()
export class CarEffects {
  constructor(
    private _actions$: Actions,
    private _store: Store,
    private _carApi: CarApi
  ) {}

  public initCarList$ = createEffect(() =>
    this._actions$.pipe(
      ofType(carActions.initCarList),
      switchMap(() => of(carActions.getCarList()))
    )
  );

  public getCarList$ = createEffect(() =>
    this._actions$.pipe(
      ofType(carActions.getCarList, carActions.updateCarListFilters),
      withLatestFrom(this._store.select(carSelectors.selectCarListFilters)),
      switchMap(([_, filters]: [any, IFilters]) =>
        this._carApi.getCarList(filters).pipe(
          map((carList: ICar[]) => carActions.successGetCarList({ carList })),
          catchError(() => of(carActions.failedGetCarList()))
        )
      )
    )
  );
}
