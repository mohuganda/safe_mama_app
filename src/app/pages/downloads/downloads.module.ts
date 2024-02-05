import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DownloadsPageRoutingModule } from './downloads-routing.module';

import { DownloadsPage } from './downloads.page';
import { SharedModule } from 'src/app/shared-module/shared-module.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SharedModule,
    DownloadsPageRoutingModule
  ],
  declarations: [DownloadsPage]
})
export class DownloadsPageModule {}
