import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ResourceListPageRoutingModule } from './resource-list-routing.module';

import { ResourceListPage } from './resource-list.page';
import { SharedModule } from 'src/app/shared-module/shared-module.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SharedModule,
    ResourceListPageRoutingModule
  ],
  declarations: [ResourceListPage]
})
export class ResourceListPageModule {}
