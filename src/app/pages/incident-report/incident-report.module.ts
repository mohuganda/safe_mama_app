import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { IncidentReportPageRoutingModule } from './incident-report-routing.module';

import { IncidentReportPage } from './incident-report.page';

@NgModule({
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    IncidentReportPageRoutingModule
  ],
  declarations: [IncidentReportPage]
})
export class IncidentReportPageModule {}
