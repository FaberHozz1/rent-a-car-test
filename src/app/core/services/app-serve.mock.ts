import {
  HttpErrorResponse,
  HttpEvent,
  HttpRequest,
  HttpResponse,
} from '@angular/common/http';
import { ROUTES_MOCK } from '@core/constants/urls-mock.constant';
import { IMock } from '@core/interfaces/mock.interface';
import { Observable, throwError } from 'rxjs';
import { environment } from 'src/environments/environment';

export class ServerMock {
  public request(req: HttpRequest<any>): Observable<HttpEvent<any>> {
    const statusResponse = 200;
    const response = ROUTES_MOCK.find((route: IMock) => {
      const url = route?.validateParam ? req.urlWithParams : req.url;
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

    return new Observable((obs: any) => {
      setTimeout(() => {
        obs.next(
          new HttpResponse({ status: statusResponse, body: response.data })
        );
        obs.complete();
      }, environment.testServeWait);
    });
  }
}
