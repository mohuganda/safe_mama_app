import { DummyService } from 'src/app/services/dummy.service';
import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { NavigationExtras, Router } from '@angular/router';

@Component({
  selector: 'app-channels',
  templateUrl: './channels.page.html',
  styleUrls: ['./channels.page.scss'],
})
export class ChannelsPage implements OnInit {

    categories:any;

    constructor(private storage: DataService,private router: Router) {
  
    }

    ngOnInit() {

      this.storage.getCache('categories').then((cachedResources)=>{
        console.log('categories tab: ',cachedResources);
        this.categories = (cachedResources)?JSON.parse(cachedResources):[]
       });
  
    }

    getIconName(icon:string){


      const newName = icon.replace("fa fa-","");
      console.log('icon',newName);
      return newName;
    }

 
    goToCategoryResources(category:any) {

      console.log('category',category);
      
      const navData: NavigationExtras = {
        queryParams : {
          category
        }
      };
      
      this.router.navigate(['/resource-list'],navData);
    }
  

}
