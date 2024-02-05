import { Component, Input, OnInit } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { NavigationExtras, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-video-player',
  templateUrl: './video-player.component.html',
  styleUrls: ['./video-player.component.scss'],
})
export class VideoPlayerComponent  implements OnInit {

  @Input() item: any;
  isNetworkConnected=false;
  networkSubscription!:Subscription
  
  constructor( private router: Router,private sanitizer: DomSanitizer, private storage:DataService) { }

   ngOnInit() {
    this.checkInternet()
  }

  
  onDestroy(){
    this.networkSubscription.unsubscribe();
  }

 
  async  checkInternet(){
    this.networkSubscription = this.storage.isNetworkConnected().subscribe((data) => {
      this.isNetworkConnected = data;
    });
   }


  goToResource(resource:any) {
    
    const navData: NavigationExtras = {
      queryParams : {
        resource : resource
      }
    };

    this.storage.selectResource(resource);
    
    this.router.navigate(['/video'],navData);
  }

  
  getVideoUrl(videoId:string): SafeResourceUrl {
    const url = `https://www.youtube.com/embed/${videoId}`;
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }

}
