import {
  HttpErrorResponse,
  HttpEvent,
  HttpRequest,
  HttpResponse,
} from '@angular/common/http';
import { ROUTES_MOCK } from '@core/constants/urls-mock.constant';
import { IMock, SortBy, Term } from '@core/interfaces/mock.interface';
import { Observable, throwError } from 'rxjs';
import { environment } from 'src/environments/environment';
import { MockBackendService } from './mock-backend.service';

export class ServerMock {
  constructor(private _mockBackendService: MockBackendService) {}

  public request(req: HttpRequest<any>): Observable<HttpEvent<any>> {
    const statusResponse = 200;
    const response = ROUTES_MOCK.find((route: IMock) => {
      const url = req.url;
      const isSameRoute = new RegExp(`(^${route.url}$)`, 'g').test(url);
      const isSameMethod = !route?.method || route?.method === req.method;
      return isSameRoute && isSameMethod;
    });

    if (!response) {
      return throwError(
        () =>
          new HttpErrorResponse({
            status: 404,
            statusText: `The route was not found ${req.url}`,
            url: req.url,
          })
      );
    }

    const term: Term = req.params.get('term') as Term;
    const sortBy: SortBy = req.params.get('sortBy') as SortBy;

    return new Observable((obs: any) => {
      setTimeout(() => {
        obs.next(
          new HttpResponse({
            status: statusResponse,
            body: this._mockBackendService.getCarsByParams(
              response.data,
              term,
              sortBy
            ),
          })
        );
        obs.complete();
      }, environment.testServeWait);
    });
  }
}
