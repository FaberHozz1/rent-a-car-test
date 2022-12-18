import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import { Injectable } from '@angular/core';

import { ServerMock } from '@core/services/app-serve.mock';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable()
export class AppMockInterceptorService implements HttpInterceptor {
  private _localServer: ServerMock;

  constructor() {
    this._localServer = new ServerMock();
  }

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    if (this._checkIsTest(req)) {
      return this._sendLocalServer(req);
    }
    return next.handle(req);
  }

  private _checkIsTest(req: HttpRequest<any>): boolean {
    return !environment.production;
  }

  private _sendLocalServer(req: any): Observable<HttpEvent<any>> {
    return this._localServer.request(req);
  }
}
