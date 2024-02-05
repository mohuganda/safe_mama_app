import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { App } from '@capacitor/app';
import { NavController, Platform } from '@ionic/angular';

@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss']
})
export class TabsPage implements OnInit{

  val:any;
  constructor(  private router: Router,
    private platform: Platform, private navCtrl: NavController) { }
  
  ngOnInit(): void {
    this.handleBack()
  }

  tabChange(eve:any) {
    console.log(eve.tab);
    this.val = eve.tab;
  }

  handleBack() {
    this.platform.backButton.subscribeWithPriority(10, () => {
   
      if (this.router.url === '/tabs' || this.router.url === '/tabs/home' || this.router.url === '/splash')
        App.exitApp();
      else
        this.navCtrl.back();

    });

  }

}
