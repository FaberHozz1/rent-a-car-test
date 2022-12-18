import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { LayoutModule } from '@presentation/layout/layout.module';
import { FiltersComponent } from './components/filters/filters.component';
import { LoaderComponent } from './components/loader/loader.component';
import { HomeRoutingModule } from './home-routing.module';
import { HomePage } from './home.page';

@NgModule({
  declarations: [HomePage, LoaderComponent, FiltersComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
    LayoutModule,
    ReactiveFormsModule,
    FormsModule,
  ],
})
export class HomeModule {}
