import { Router } from '@angular/router';
import { Component } from '@angular/core';
import { ModalController, NavController, Platform } from '@ionic/angular';
import { SplashScreen } from '@capacitor/splash-screen';

import { register } from 'swiper/element/bundle';
import { App } from '@capacitor/app';
import { PrivacyPolicyComponent } from './components/privacy-policy/privacy-policy.component';

register();

@Component({
    selector: 'app-root',
    templateUrl: 'app.component.html',
    styleUrls: ['app.component.scss']
})
export class AppComponent {
    constructor(
        private platform: Platform,
        private router: Router,
        private navCtrl: NavController,
        private modalController:ModalController
    ) {
        this.initializeApp();
    }

    initializeApp() {
        this.platform.ready().then(() => {
            SplashScreen.hide();
        });
    }

    goToResources() {
        this.router.navigate(['/resource-list']);
    }

   
    goToChannels() {
        this.router.navigate(['/channels']);
    }

    goToDownloads() {
        this.router.navigate(['/downloads']);
    }

    goToFeatured() {
        this.router.navigate(['/tabs/featured']);
    }

    goToLanguages() {
        this.router.navigate(['/languages']);
    }

    goToLogin() {
        this.router.navigate(['/login']);
    }

    goToNews() {
        this.router.navigate(['/tabs/news']);
    }

    goToWebinars() {
        this.router.navigate(['/webinars']);
    }

    goToTrainings() {
        this.router.navigate(['/trainings']);
    }

    goToIncidentReport() {
        this.router.navigate(['/incident-report']);
    }

    goToContact() {
        this.router.navigate(['/contact']);
    }

    async privacyPolicy() {

        const modal = await this.modalController.create({
          component: PrivacyPolicyComponent});
        await modal.present();
    
        const { data } = await modal.onWillDismiss();
        console.log(data);
    
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
