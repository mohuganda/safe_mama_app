import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuController, NavController, Platform, ToastController } from '@ionic/angular';
import { UiService } from 'src/app/services/ui.service';

import {App} from '@capacitor/app';

@Component({
  selector: 'app-splash',
  templateUrl: './splash.page.html',
  styleUrls: ['./splash.page.scss'],
})
export class SplashPage implements OnInit {

  exitcounter = 0;
  route='tabs';

  constructor(
    private menu: MenuController,
    private router: Router,
    private platform: Platform,
    private navCtrl: NavController

  ) { }

  ngOnInit() {
    this.menu.enable(false);
    this.handleBack();
    setTimeout(() => { this.login(); }, 4000);
  }

  handleBack() {
    this.platform.backButton.subscribeWithPriority(10, () => {
   
      if (this.router.url === '/tabs' || this.router.url === '/tabs/home' || this.router.url === '/splash') {

        App.exitApp();

      } else {
        this.navCtrl.back();
      }
    });

  }


  login() {

    (this.route == 'tabs') ? this.menu.enable(true) : null;
     this.router.navigate([this.route]);

  }



}
