import { Injectable } from '@angular/core';
import { ICar } from '@core/interfaces/car.interface';
import { SortBy, Term } from '@core/interfaces/mock.interface';

@Injectable({
  providedIn: 'root',
})
export class MockBackendService {
  constructor() {}

  public getCarsByParams(
    carList: ICar[],
    term?: Term,
    sortBy?: SortBy
  ): ICar[] {
    const response: ICar[] = term ? this._filterByTerm(carList, term) : carList;
    if (sortBy) {
      return this._sortBy([...response], sortBy);
    }
    return response;
  }

  private _filterByTerm(carList: ICar[], term: string): ICar[] {
    return carList.filter(({ brand }: ICar) => {
      const newBrand = this._clearStringAndLowerCase(brand);
      const newTerm = this._clearStringAndLowerCase(term);
      return newBrand.includes(newTerm);
    });
  }

  private _sortBy(carList: ICar[], sortBy: SortBy): ICar[] {
    if (!sortBy) return carList;
    return carList.sort((car1, car2) => {
      const a: string = this._clearStringAndLowerCase(car1[sortBy]);
      const b: string = this._clearStringAndLowerCase(car2[sortBy]);
      return a < b ? -1 : a > b ? 1 : 0;
    });
  }

  private _clearStringAndLowerCase(value: string): string {
    return value.toLocaleLowerCase().replace(' ', '');
  }
}
