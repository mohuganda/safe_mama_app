import { Injectable } from '@angular/core';
import { Toast } from '@capacitor/toast';
import { AlertController, LoadingController } from '@ionic/angular';
@Injectable({
  providedIn: 'root'
})
export class UiService {

  constructor(
    private alertController: AlertController,
    public loadingController: LoadingController) { }

  public async showToast(msg:string='') {

    Toast.show({
      text:msg,
      duration:'short',
    })

  }

  showLoader(msg = '') {
    this.loadingController.create({
      message: (msg) ? msg : 'Please wait...'
    }).then((res) => {
      this.loadingController.getTop().then(
        (v) => v ? res.present() : null);
      res.onDidDismiss().then((dis) => {
      });
    });
  }

  async hideLoader() {
    try {
      await this.loadingController.dismiss();
    } catch (error) {
      //
    }
  }

  async showAlert(message:string, title = null) {

    try {
      await this.alertController.dismiss();
    } catch (err) {
      //surpress
    }

    const alert = await this.alertController.create({
      mode: 'ios', message, header: (title) ? title : 'Attention!',
      buttons: [
        {
          text: 'OK',
          handler: () => {
            //
          }
        }
      ]
    });
    await alert.present();
  }


}
