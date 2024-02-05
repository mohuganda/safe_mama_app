import { Component, OnInit } from '@angular/core';
import { DummyService } from 'src/app/services/dummy.service';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from 'src/app/services/data.service';
import { ApiService } from 'src/app/services/api.service';
import { InfiniteScrollCustomEvent } from '@ionic/angular';
import { Network } from '@capacitor/network';

@Component({
  selector: 'app-resource-list',
  templateUrl: './resource-list.page.html',
  styleUrls: ['./resource-list.page.scss'],
})
export class ResourceListPage implements OnInit {

  allresources:any;
  loaded:boolean=false;
  category:any;
  cacheKey:string;
  currentPage = 0;
  isThereMore=true;
  filtered:any=[]
  filtering=false
  filterLoading=false

  constructor(private storage: DataService,private router:Router,private api: ApiService, private route: ActivatedRoute) {
  
    const category = this.router.getCurrentNavigation()?.extras?.queryParams?.['category'];
    this.category  = (category)?category:null;
    this.cacheKey  = (category)?category.class_id+'-resources':'allresources';
  }

  ngOnInit() {

     Network.addListener('networkStatusChange', status => {
      console.log('Network status changed', status);
      if(status.connected){
        this.fetchResources();
      }
    });

    this.storage.getCache(this.cacheKey).then((cachedResources)=>{
      //console.log('allresources: ',cachedResources);
        
      this.allresources = (cachedResources)?JSON.parse(cachedResources):[]

      if(this.allresources.length>0)
       this.loaded = true
     
     });

    this.fetchResources();
    
  }

  
  fetchResources(refresh=false){

    if(refresh)
     this.currentPage =((this.currentPage-15)>0)?(this.currentPage-15):0;

    if(this.category){
      //get for category

      this.api.getCategoryResources(this.currentPage,15,this.category.class_id).subscribe((response)=>{
        console.log('allresources: ',response.message);
        const started_at   = parseInt(response.pagination.start_page);//don't merge if page already fechted
         
        if(response.message.length>0){
          const allresources = (this.currentPage>0 && started_at>=this.currentPage)?this.allresources.concat(response.message):response.message;
          this.allresources = allresources;
          this.storage.cacheData(this.cacheKey,allresources);

          this.currentPage = this.currentPage+15;
          this.isThereMore = true;
         }
         else
          this.isThereMore = false;

          if(response.pagination.start_page >= response.pagination.total_rows)
          this.isThereMore = false;

         this.loaded = true
        
    },(error:any)=>{

        
    });

    }else{

      //get all
    this.api.getResources(this.currentPage,15).subscribe((response)=>{
        console.log('allresources: ',response.message);
         const started_at   = parseInt(response.pagination.start_page);//don't combine if page already fechted
        
         console.log('started_at: ',started_at);
         console.log('current page: ',this.currentPage);

         if(response.message.length>0){
          const allresources = (this.currentPage>0 && started_at>=this.currentPage)?this.allresources.concat(response.message):response.message;
          this.allresources = allresources;
          this.storage.cacheData(this.cacheKey,allresources);

          this.currentPage = this.currentPage+15;
          this.isThereMore = true;
         }
         else
          this.isThereMore = false;

          if(response.pagination.start_page >= response.pagination.total_rows)
          this.isThereMore = false;

         this.loaded = true;

    },(error:any)=>{

        
    });

  }

  }

  onIonInfinite(ev:any) {

    console.log('is there more?',this.isThereMore);

    if(this.isThereMore)
     this.fetchResources()
    else
    (ev as InfiniteScrollCustomEvent).target.complete();

    setTimeout(() => {
      (ev as InfiniteScrollCustomEvent).target.complete();
    }, 500);
  }

  handleSearch(event:any){

    this.filtered = [];

    console.log(event)

    const query = event.target.value.toLowerCase();
    
    if(query.length>0){
      this.filtering = true;
      this.filterLoading=true
    }
    else{
      this.filtering = false;
      this.filterLoading=false;
    }

    const filtered = this.allresources.filter((item:any) => (item.category.toLowerCase().indexOf(query) > -1 || item.title.toLowerCase().indexOf(query) > -1  || (item.overview && item.overview.toLowerCase().indexOf(query)>-1)));
    this.filtered = filtered;

    this.fetchSearch(query);

  }

  fetchSearch(query:string){

      if(!this.isThereMore){
        this.filterLoading
        return; 
      }

      this.api.getSearchResults(query).subscribe((response)=>{
        console.log('search results: ',response.message);
       
        if(response.message && response.message.length>0){
          this.filtered.concat(response.message)
        }

        this.filterLoading = false;
        
    },(error:any)=>{

      this.filterLoading = false;
        
    });
  }

}
