import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MODULES, ROUTES } from '@core/constants/routes.constant';

const routes: Routes = [
  {
    path: '',
    redirectTo: ROUTES[MODULES.HOME],
    pathMatch: 'full',
  },
  {
    path: ROUTES[MODULES.HOME],
    loadChildren: () =>
      import('./presentation/features/home/home.module').then(
        (m) => m.HomeModule
      ),
  },
  {
    path: ROUTES[MODULES.SERVICES],
    loadChildren: () =>
      import('./presentation/features/services/services.module').then(
        (m) => m.ServicesModule
      ),
  },
  {
    path: ROUTES[MODULES.CONTACT_US],
    loadChildren: () =>
      import('./presentation/features/contact-us/contact-us.module').then(
        (m) => m.ContactUsModule
      ),
  },
  {
    path: '**',
    redirectTo: ROUTES[MODULES.HOME],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
