import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ApiService } from 'src/app/services/api.service';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-privacy-policy',
  templateUrl: './privacy-policy.component.html',
  styleUrls: ['./privacy-policy.component.scss'],
})
export class PrivacyPolicyComponent  implements OnInit {

  policy:any

  constructor(
    private modalController: ModalController,
    private storage: DataService,
    private api:ApiService
  ) { }

  ngOnInit() {
   
    this.storage.getCache("POLICY").then((cachedResources)=>{
       
      this.policy = (cachedResources)?JSON.parse(cachedResources):[]
     
     });

  }

 
  
  closeModal() {
    this.modalController.dismiss({});
  }
}
