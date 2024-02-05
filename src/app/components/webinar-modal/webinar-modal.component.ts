import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-webinar-modal',
  templateUrl: './webinar-modal.component.html',
  styleUrls: ['./webinar-modal.component.scss'],
})
export class WebinarModalComponent  implements OnInit {

  @Input() data:any;
  doEdit = false;
  
  constructor(
    private modalController: ModalController,
    private dataService: DataService
  ) { }

  ngOnInit() {
    this.dataService.log(this.data);;
  }

  editLog() {
    this.doEdit = true;
    this.closeModal();
  }
  
  closeModal() {
    this.modalController.dismiss({ data: this.data, edit: this.doEdit });
  }
}
