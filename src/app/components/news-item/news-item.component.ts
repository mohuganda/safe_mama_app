import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Browser } from '@capacitor/browser';

@Component({
  selector: 'app-news-item',
  templateUrl: './news-item.component.html',
  styleUrls: ['./news-item.component.scss'],
})
export class NewsItemComponent  implements OnInit {

  @Input() item: any;

  constructor( private router: Router) { }

  ngOnInit() {}

  async goToNews(url:string) {
    console.log(url)
    await Browser.open({ url });
  }

}
