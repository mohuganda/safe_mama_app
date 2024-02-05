import { Component, OnInit } from '@angular/core';
import { DummyService } from 'src/app/services/dummy.service';
import { Router, NavigationExtras } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';
import { IonicSlides } from '@ionic/angular';
import { DataService } from 'src/app/services/data.service';
import { UiService } from 'src/app/services/ui.service';
import { Network } from '@capacitor/network';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  resources:any=[];
  reporter:any=[];
  categories:any=[];
  featured:any=[];
  quickaccess:any=[];

  constructor(private api: ApiService,
     private dummy:DummyService,
     private storage:DataService,
     private ui:UiService,
     private router: Router) {

    this.loadCache()
    console.log(this.resources);
  }

  ngOnInit() {

    this.ui.showLoader('Please wait...');
 
    this.fetchAppData();
    this.fetchResources();

    Network.addListener('networkStatusChange', status => {
      console.log('Network status changed', status);
      this.storage.setNetworkState(status.connected)
      if(status.connected){
        this.fetchAppData();
        this.fetchResources()
      }
    });
  }

  loadCache(){
   
     this.storage.getCache('resources').then((cachedResources)=>{
      //console.log('resources: ',cachedResources);
      this.resources = (cachedResources)?JSON.parse(cachedResources):[]
     });

     this.storage.getCache('categories').then((cachedResources)=>{
      //console.log('categories: ',cachedResources);
      this.categories = (cachedResources)?JSON.parse(cachedResources):[]
     });

     this.storage.getCache('featured').then((cachedResources)=>{
      //console.log('featured: ',cachedResources);
        
      this.featured = (cachedResources)?JSON.parse(cachedResources):[]
     });

     this.storage.getCache('quickaccess').then((cachedResources)=>{
      //console.log('quickaccess: ',cachedResources);
        
      this.quickaccess = (cachedResources)?JSON.parse(cachedResources):[]
     });


  }

  handleRefresh(event:any){

    this.fetchAppData();
    this.fetchResources()
    setTimeout(() => {
      // Any calls to load data go here
      event.target.complete();
    }, 2000);
  }

  fetchResources(){

    this.api.getResources(0,5).subscribe((response)=>{
        console.log('response: ',response.message);
        
        if(response?.message?.length>0){
         this.resources = response.message;
         this.storage.cacheData('resources',response.message);
        }
         //this.ui.hideLoader();
        
    },(error:any)=>{

       this.ui.hideLoader();
       this.ui.showAlert("An error ocurred, close app and try again");
        
    });

  }

  fetchAppData(){

    this.api.getAppData().subscribe((response)=>{

         console.log('response: ',response.message);
        
         this.categories  = response.message.classes;
         this.featured    = response.message.featured;
         this.quickaccess = response.message.quick_access;

         this.storage.cacheData('featured',response.message.featured);
         this.storage.cacheData('categories',response.message.classes);
         this.storage.cacheData('quickaccess',response.message.quick_access);
         this.storage.cacheData('POLICY',response.message.policy)
        
    },(error:any)=>{

      this.ui.showAlert("An error ocurred, close app and try again");
        
    });

  }

  goToResourceList() {
    this.router.navigate(['/resource-list']);
  }

}
