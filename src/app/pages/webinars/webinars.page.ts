import { Component, OnInit } from '@angular/core';
import { LoadingController, ModalController } from '@ionic/angular';
import { WebinarModalComponent } from 'src/app/components/webinar-modal/webinar-modal.component';
import { ApiService } from 'src/app/services/api.service';
import { DataService } from 'src/app/services/data.service';
import { UiService } from 'src/app/services/ui.service';

@Component({
  selector: 'app-webinars',
  templateUrl: './webinars.page.html',
  styleUrls: ['./webinars.page.scss'],
})
export class WebinarsPage implements OnInit {

  webinars: any = [];
  loaded = false;

  constructor(
    private dataService: DataService,
    private api:ApiService,
    private modalController: ModalController,
    private loadingController: LoadingController,
    private uiService: UiService
  ) {


   }

  ngOnInit() {
    this.getEntrys();
  }

  getEntrys() {

    this.api.getWebinars().subscribe((response:any) => {

      console.log('Webinars',response)

      this.webinars =  response;

      console.log('Webinars',this.webinars)

      this.uiService.hideLoader();
      this.loaded = true;

    }, (error:any) => {
      this.uiService.hideLoader();
    });

  }

 
  async showLog(webinar:any) {

    const modal = await this.modalController.create({
      component: WebinarModalComponent,
      componentProps: { data: webinar },
    });
    await modal.present();

    const { data } = await modal.onWillDismiss();
    console.log(data);

  }


}
