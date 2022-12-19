import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { URLS_API } from '@core/constants/url-api.constant';
import { ICar } from '@core/interfaces/car.interface';
import { IFilters } from '@core/interfaces/home.interface';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CarApi {
  constructor(private _http: HttpClient) {}

  public getCarList(filters: IFilters): Observable<ICar[]> {
    let params = new HttpParams();
    params = params.appendAll({ ...filters });
    return this._http.get<ICar[]>(URLS_API.GET_CARS, { params });
  }
}
