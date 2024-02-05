import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClient, HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { AppHttpInterceptor } from './services/app-http-interceptor';
import { StreamingMedia } from '@awesome-cordova-plugins/streaming-media/ngx';
import { FontAwesomeModule, FaIconLibrary } from '@fortawesome/angular-fontawesome';
import { fas } from '@fortawesome/free-solid-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { SharedModule } from './shared-module/shared-module.module';
import { DatePipe } from '@angular/common';


@NgModule({
  declarations: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  imports: [
    BrowserModule, 
    IonicModule.forRoot(),
    AppRoutingModule,
    HttpClientModule,
    SharedModule,
    FontAwesomeModule
  ],
  providers: [
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    HttpClient,
    { provide: HTTP_INTERCEPTORS, useClass: AppHttpInterceptor, multi: true },
    StreamingMedia,
    DatePipe
  ],
  bootstrap: [AppComponent]
})
export class AppModule { 

  constructor(library: FaIconLibrary) { 
		library.addIconPacks(fas, fab, far);
	}
}
