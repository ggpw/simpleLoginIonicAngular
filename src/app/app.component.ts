import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { AuthenticationService } from './services/authentication.service';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})
export class AppComponent {
  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private authService: AuthenticationService,
    private router: Router,
    private translate: TranslateService
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.translate.setDefaultLang('en');
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();

      this.authService.authenticationState.subscribe(state => {
        console.log('Auth changed: ', state);
        if (state) {
          this.router.navigate(['members', 'dashboard']);
        } else {
          this.router.navigate(['']);
        }
      });
    });
  }

  test() {
    console.log('fromm root');
  }

  changeLanguage(lang: string) {
    console.log('current lang ', this.translate.currentLang);
    console.log('lang choosen ', lang);
    this.translate.use(lang);
  }
}
