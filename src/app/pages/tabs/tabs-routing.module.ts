import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'home',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../home/home.module').then(m => m.HomePageModule)
          }
        ]
      },
     
      {
        path: 'resource',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../resource-list/resource-list.module').then(m => m.ResourceListPageModule)
          }
        ]
      },
      {
        path: 'categories',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../channels/channels.module').then(m => m.ChannelsPageModule)
          }
        ]
      },
      {
        path: 'featured',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../downloads/downloads.module').then(m => m.DownloadsPageModule)
          }
        ]
      },
      {
        path: 'news',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../news-list/news-list.module').then(m => m.NewsListPageModule)
          }
        ]
      },
      {
        path: '',
        redirectTo: '/tabs/home',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/home',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TabsPageRoutingModule { }
