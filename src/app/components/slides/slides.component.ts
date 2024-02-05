import { Component, Input, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { IonicSlides } from '@ionic/angular';
import { Subscription } from 'rxjs';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-slides',
  templateUrl: './slides.component.html',
  styleUrls: ['./slides.component.scss'],
})
export class SlidesComponent  implements OnInit {

  @Input() items: any;
  swiperModules = [IonicSlides];
  isNetworkConnected=false;
  networkSubscription!:Subscription

  constructor( private router: Router,private dataService:DataService) { }

  ngOnInit() {
    this.checkInternet();
  }

  onDestroy(){
    this.networkSubscription.unsubscribe();
  }

 
  async  checkInternet(){
    this.networkSubscription = this.dataService.isNetworkConnected().subscribe((data) => {
      this.isNetworkConnected = data;
    });
   }

  goToResource(resource:any) {
    
    const navData: NavigationExtras = {
      queryParams : {
        resource : resource
      }
    };

    this.dataService.selectResource(resource);
    
    this.router.navigate(['/video'],navData);
  }

}
