import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CustomFormsRoutingModule } from './custom-forms-routing.module';
import { InputComponent } from './input/input.component';
import { SelectComponent } from './select/select.component';

const CUSTOM_FORMS_COMPONESTS = [InputComponent, SelectComponent];

@NgModule({
  declarations: CUSTOM_FORMS_COMPONESTS,
  imports: [
    CommonModule,
    CustomFormsRoutingModule,
    ReactiveFormsModule,
    FormsModule,
  ],
  exports: CUSTOM_FORMS_COMPONESTS,
})
export class CustomFormsModule {}
