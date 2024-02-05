import { DummyService } from 'src/app/services/dummy.service';
import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-downloads',
  templateUrl: './downloads.page.html',
  styleUrls: ['./downloads.page.scss'],
})
export class DownloadsPage implements OnInit {

    featured:any;
    
    constructor(private storage: DataService) {
    }

    ngOnInit() {

      this.storage.getCache('featured').then((cachedResources)=>{
        //console.log('featured: ',cachedResources);
          
        this.featured = (cachedResources)?JSON.parse(cachedResources):[]
       });
  
    }

}
