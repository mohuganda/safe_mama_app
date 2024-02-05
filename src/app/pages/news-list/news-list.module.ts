import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NewsListPageRoutingModule } from './news-list-routing.module';

import { NewsListPage } from './news-list.page';
import { SharedModule } from 'src/app/shared-module/shared-module.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NewsListPageRoutingModule,
    SharedModule
  ],
  declarations: [NewsListPage]
})
export class NewsListPageModule {}
