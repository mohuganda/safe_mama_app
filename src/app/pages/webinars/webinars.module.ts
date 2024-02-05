import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { WebinarsPageRoutingModule } from './webinars-routing.module';

import { WebinarsPage } from './webinars.page';
import { SharedModule } from 'src/app/shared-module/shared-module.module';

@NgModule({
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SharedModule,
    WebinarsPageRoutingModule
  ],
  declarations: [WebinarsPage]
})
export class WebinarsPageModule {}
