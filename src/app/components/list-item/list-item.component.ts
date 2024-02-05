import { Component, Input, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-list-item',
  templateUrl: './list-item.component.html',
  styleUrls: ['./list-item.component.scss'],
})
export class ListItemComponent  implements OnInit {

  @Input() item: any;
  @Input() cssClass: any='normal-item';
  isNetworkConnected=false;
  networkSubscription!:Subscription

  constructor( private router: Router,private storage:DataService) {
   
   }

  ngOnInit() {
    this.checkInternet();
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

  goToResource(resource:any) {

    console.log('data',resource);
    
    const navData: NavigationExtras = {
      queryParams : {
        resource : resource
      }
    };

    this.storage.selectResource(resource);
    
    this.router.navigate(['/video'],navData);
  }

}
