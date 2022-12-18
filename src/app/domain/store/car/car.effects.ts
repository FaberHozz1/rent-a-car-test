import { Injectable } from '@angular/core';
import { ICar } from '@core/interfaces/car.interface';
import { CarApi } from '@data/apis/car.api';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { of } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';

import * as carActions from './car.actions';

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
      ofType(carActions.getCarList),
      switchMap(() => {
        return this._carApi
          .getCarList()
          .pipe(
            map((carList: ICar[]) => carActions.successGetCarList({ carList }))
          );
      })
    )
  );
}
