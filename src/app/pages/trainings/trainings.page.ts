import { Component, OnInit } from '@angular/core';
import { Browser } from '@capacitor/browser';

@Component({
  selector: 'app-trainings',
  templateUrl: './trainings.page.html',
  styleUrls: ['./trainings.page.scss'],
})
export class TrainingsPage implements OnInit {

  entities: any = [];

  constructor() { }

  ngOnInit() {

    this.entities = [
      {title:'MOH Elearning Platform',description:'',url:'https://elearning.health.go.ug/course/index.php?categoryid=3'},
      {title:'IHIRS Training',description:'',url:'https://hris2.health.go.ug/national_train/login'}
    ];

  }

  showEntity(entity:any) {
    Browser.open({url:entity?.url})
  }




}
