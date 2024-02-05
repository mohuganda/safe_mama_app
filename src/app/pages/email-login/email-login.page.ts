import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-email-login',
  templateUrl: './email-login.page.html',
  styleUrls: ['./email-login.page.scss'],
})
export class EmailLoginPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  goToHome() {
      this.router.navigate(['/tabs/home']);
  }

}
