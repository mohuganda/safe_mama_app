import { Component, OnInit } from '@angular/core';
import { DummyService } from 'src/app/services/dummy.service';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';
import { UiService } from 'src/app/services/ui.service';
import { Network } from '@capacitor/network';

@Component({
  selector: 'app-news-list',
  templateUrl: './news-list.page.html',
  styleUrls: ['./news-list.page.scss'],
})
export class NewsListPage implements OnInit {

  news=[];
  title:any;
  loaded=false;
  constructor(private ui: UiService, private api:ApiService, private route: ActivatedRoute) {
   // this.news = this.dummy.resources;
  }

  ngOnInit() {

    Network.addListener('networkStatusChange', status => {
      console.log('Network status changed', status);
      if(status.connected){
        this.fetchNews();
      }
    });

    this.route.queryParams.subscribe((data:any) => {
      console.log(data);
      this.title = data.id;
    });

    this.fetchNews();
  }

  fetchNews(){

    this.api.getRssFeed().subscribe((response)=>{

      console.log(response);

       this.news = response;
       this.loaded=true;

    },(error)=>{

      this.ui.showAlert("An error occured, try again");
      
    })

  }

}
