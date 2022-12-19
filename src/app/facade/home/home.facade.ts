import { Injectable } from '@angular/core';
import { ICar } from '@core/interfaces/car.interface';
import { IFilters } from '@core/interfaces/home.interface';
import * as carActions from '@domain/store/car/car.actions';
import * as carSelectors from '@domain/store/car/car.selectors';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class HomeFacade {
  public isLoading$: Observable<boolean>;
  public carList$: Observable<ICar[]>;

  constructor(private _store: Store) {
    this.isLoading$ = this._store.select(carSelectors.selectIsLoading);
    this.carList$ = this._store.select(carSelectors.selectCarList);
  }

  public onInitHome(): void {
    this._store.dispatch(carActions.initCarList());
  }

  public updateHomeFilters(filters: IFilters): void {
    this._store.dispatch(carActions.updateCarListFilters({ filters }));
  }

  public onCloseSession(): void {
    // this._store.dispatch(appActions.onCloseSession());
  }
}
