import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LayoutModule } from './presentation/layout/layout.module';

import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppMockInterceptorService } from '@core/services/app-mock-interceptor.service';
import { RootEffects, RootReducers } from '@domain/store';
import { environment } from '@environment/environment';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    LayoutModule,
    StoreModule.forRoot(RootReducers),
    EffectsModule.forRoot(RootEffects),
    StoreDevtoolsModule.instrument({
      maxAge: 25,
      logOnly: environment.production,
    }),
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AppMockInterceptorService,
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
