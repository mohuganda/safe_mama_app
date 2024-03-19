import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { ScreenReader } from '@capacitor/screen-reader';
import { Share } from '@capacitor/share';
import { ModalController } from '@ionic/angular';
import { Subscription } from 'rxjs';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-content-view',
  templateUrl: './content-view.component.html',
  styleUrls: ['./content-view.component.scss'],
})
export class ContentViewComponent  implements OnInit {

  @Input() data:any
  item:any
  readEnabled=false
  showFull=false
  networkSubscription!: Subscription;
  isNetworkConnected=false;
  
  @ViewChild('resourceBody') resourceBody: ElementRef | undefined;

  constructor(private storage: DataService, private  modalController: ModalController) { }

  ngOnInit() {

    this.item = this.data?.item;
    this.checkInternet()
  }

  async  checkInternet(){
    this.networkSubscription = this.storage.isNetworkConnected().subscribe((data) => {
      console.log('net state',data)
      this.isNetworkConnected = data;
    });
   }

  async readContent (item:any) {

    this.readEnabled = !this.readEnabled;
   
    console.log(this.readEnabled);

    if(this.readEnabled){
       this.showFull = true;
       
       const textContent = this.resourceBody?.nativeElement.textContent;
      console.log(textContent)

      await ScreenReader.speak({ value: item.title +'.'+item.category+'.'+textContent});
    }
    else
    await ScreenReader.speak({ value: '' });

  };

  async shareResource(item:any){
    const textContent = this.resourceBody?.nativeElement.textContent;
    await Share.share({
      title: this.item.title,
      text:  this.item.title + " -"+this.data.title+"\n\r"+textContent +"\n\r\n\rSee More in The SafeMama App  \n\r\n\rhttps://play.google.com/store/apps/details?id=com.moh.safemama",
      dialogTitle: 'Share with fellows',
    });

  }

  toggleDetails(){
    this.showFull = !this.showFull;
  }

  closeModal() {
    this.modalController.dismiss({ });
  }

  getFormattedName(imageName:string){
    return this.storage.urlEncode(imageName);
  }

}
