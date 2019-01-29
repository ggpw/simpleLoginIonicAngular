import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'src/app/services/authentication.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
})
export class DashboardPage implements OnInit {

  user = {};

  constructor(private authService: AuthenticationService) {
    this.user = authService.getCurrentLogin();
    console.log('construct ', this.user);
  }

  ngOnInit() {
  }

  logout() {
    this.authService.logout();
  }

}
