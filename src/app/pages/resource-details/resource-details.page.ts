import { Router, NavigationExtras } from '@angular/router';
import { DummyService } from 'src/app/services/dummy.service';
import { Component, ElementRef, OnChanges, OnInit, ViewChild } from '@angular/core';
import { ScreenReader } from '@capacitor/screen-reader';
import { Share } from '@capacitor/share';
import { StreamingMedia } from '@awesome-cordova-plugins/streaming-media/ngx'
import { DataService } from 'src/app/services/data.service';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { Browser } from '@capacitor/browser';
import { Subscription } from 'rxjs';
import { ModalController } from '@ionic/angular';
import { ContentViewComponent } from 'src/app/components/content-view/content-view.component';
import { DatePipe } from '@angular/common';


@Component({
  selector: 'app-resource-details',
  templateUrl: './resource-details.page.html',
  styleUrls: ['./resource-details.page.scss'],
})
export class ResourceDetailsPage implements OnInit {


  @ViewChild('resourceBody') resourceBody: ElementRef | undefined;

  featured:any=[];
  readEnabled=false;
  item:any;
  showFull=false;
  parentItem:any;
  selectedResourceSubscription!: Subscription;
  networkSubscription!: Subscription;
  isNetworkConnected=false;

  constructor(
    private storage: DataService, private router: Router,
     private media: StreamingMedia,private sanitizer: DomSanitizer,
      private  modalController: ModalController,
      private datePipe: DatePipe
      ) {
    
  }

  ngOnInit() {

    this.checkInternet();
   
     const item = this.router.getCurrentNavigation()?.extras?.queryParams?.['resource'];
     this.parentItem = item;
     this.item = item;

     console.log('resource1',this.item);
   
     this.selectedResourceSubscription = this.storage.getSelectedResource().subscribe((data) => {
      
      if(data){
        this.parentItem = data;
        this.item = data;
      }

    });

    console.log('resource',this.item);
   
    this.storage.getCache('featured').then((cachedResources)=>{
      //console.log('featured: ',cachedResources);
        
      this.featured = (cachedResources)?JSON.parse(cachedResources):[]
     });


  }

  onDestroy(){
    this.networkSubscription.unsubscribe();
  }

  async  checkInternet(){
    this.networkSubscription = this.storage.isNetworkConnected().subscribe((data) => {
      console.log('net state',data)
      this.isNetworkConnected = data;
    });
   }

  toggleDetails(){
    this.showFull = !this.showFull;
  }

  switchResource(lesson:any,resource:any=null){
    console.log(lesson);
    this.item = lesson;
    this.item.resource = resource;
  }

  goTovideoList(val:any) {

    const navData: NavigationExtras = {
      queryParams: {
        id: val
      }
    };
    this.router.navigate(['/video-list'], navData);
  }

  getVideoUrl(videoId:string): SafeResourceUrl {
    const url = `https://www.youtube.com/embed/${videoId}`;
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
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
      title: item.title,
      text: item.title +'\n\r\n\r' +item.description +"\n\r\n\rSee Details in The SafeMama App  \n\r\n\rhttps://play.google.com/store/apps/details?id=com.moh.safemama",
      dialogTitle: 'Share with fellows',
    });

  }

  async downloadAttachement(url:string) {
    console.log(url)
    await Browser.open({ url });
  }

  async showContent(title:string,content:string){

      const data = {item:this.item,title:title,content:content}
      const modal =  await this.modalController.create({
        component:ContentViewComponent,
        componentProps:{data}
      });

      await modal.present();
  }

  formatDate(dateString: string): string {

    const date = new Date(dateString);
    // Use the DatePipe to format the date in words
    return this.datePipe.transform(date, 'mediumDate', 'en-US') || '';
  }
  
  ngOnDestroy() {
    this.selectedResourceSubscription.unsubscribe();
  }


}
