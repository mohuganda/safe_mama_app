import { DummyService } from 'src/app/services/dummy.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-languages',
  templateUrl: './languages.page.html',
  styleUrls: ['./languages.page.scss'],
})
export class LanguagesPage implements OnInit {

  languages;
    constructor(private dummy: DummyService) {
        this.languages = this.dummy.languages;
    }

    ngOnInit() {
    }

}
