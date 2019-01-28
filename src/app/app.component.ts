import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { AuthenticationService } from './services/authentication.service';
import { LanguageService } from './services/language.service';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})
export class AppComponent {

  i = -1;

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private authService: AuthenticationService,
    private langService: LanguageService,
    private router: Router,
    private translate: TranslateService
  ) {
    this.initializeApp();
    this.translate.setDefaultLang('en');
    this.translate.use('en');
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();

      this.authService.authenticationState.subscribe(state => {
        console.log('Auth changed: ', state);
        console.log('current route ', this.router.url);
        if (state) {
          this.router.navigate(['members', 'dashboard']);
        } else {
          this.router.navigate(['']);
        }
      });

      this.langService.langState.subscribe(state => {
        console.log('Lang changed: ', state);
        this.translate.use(state);
      });
    });
  }
}
