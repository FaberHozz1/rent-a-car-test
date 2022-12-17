import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { BaseComponent } from './base/base.component';
import { FooterComponent } from './footer/footer.component';
import { NavbarComponent } from './navbar/navbar.component';

const COMPONENTS = [BaseComponent, NavbarComponent, FooterComponent];

@NgModule({
  declarations: COMPONENTS,
  imports: [CommonModule, RouterModule],
  exports: COMPONENTS,
})
export class LayoutModule {}
