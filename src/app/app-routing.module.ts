import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  // {
  //   path: '',
  //   redirectTo: 'tabs',
  //   pathMatch: 'full'
  // },
  {
    path: '',
    loadChildren: () => import('./pages/tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'splash',
    loadChildren: () => import('./pages/splash/splash.module').then( m => m.SplashPageModule)
  },
  {
    path: 'tabs',
    loadChildren: () => import('./pages/tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'home',
    loadChildren: () => import('./pages/home/home.module').then(m => m.HomePageModule)
  },
  {
    path: 'resource-list',
    loadChildren: () => import('./pages/resource-list/resource-list.module').then(m => m.ResourceListPageModule)
  },
  {
    path: 'video',
    loadChildren: () => import('./pages/resource-details/resource-details.module').then( m => m.ResourceDetailsPageModule)
  },
  {
    path: 'downloads',
    loadChildren: () => import('./pages/downloads/downloads.module').then( m => m.DownloadsPageModule)
  },
  {
    path: 'channels',
    loadChildren: () => import('./pages/channels/channels.module').then( m => m.ChannelsPageModule)
  },
  {
    path: 'languages',
    loadChildren: () => import('./pages/languages/languages.module').then( m => m.LanguagesPageModule)
  },

  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'email-login',
    loadChildren: () => import('./pages/email-login/email-login.module').then( m => m.EmailLoginPageModule)
  },
  {
    path: 'mobile-login',
    loadChildren: () => import('./pages/mobile-login/mobile-login.module').then( m => m.MobileLoginPageModule)
  },  {
    path: 'incident-report',
    loadChildren: () => import('./pages/incident-report/incident-report.module').then( m => m.IncidentReportPageModule)
  },
  {
    path: 'contact',
    loadChildren: () => import('./pages/contact/contact.module').then( m => m.ContactPageModule)
  },
  {
    path: 'webinars',
    loadChildren: () => import('./pages/webinars/webinars.module').then( m => m.WebinarsPageModule)
  },
  {
    path: 'trainings',
    loadChildren: () => import('./pages/trainings/trainings.module').then( m => m.TrainingsPageModule)
  },

  

];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
