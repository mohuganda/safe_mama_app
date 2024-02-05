import { Router } from '@angular/router';
import { DummyService } from 'src/app/services/dummy.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

    constructor(private dummy: DummyService, private router: Router) {
      
    }

    ngOnInit() {
    }

    goToEmailLogin() {
        this.router.navigate(['/email-login']);
    }

    goToMobileLogin() {
        this.router.navigate(['/mobile-login']);
    }

}
