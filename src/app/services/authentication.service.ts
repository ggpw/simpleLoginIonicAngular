import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Storage } from '@ionic/storage';
import { Platform } from '@ionic/angular';
import * as CryptoJS from 'crypto-js';

const TOKEN_KEY = 'auth-token';
@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  authenticationState = new BehaviorSubject(false);
  userState =  new BehaviorSubject({});

  constructor(private storage: Storage, private plt: Platform) {
    console.log('construct AuthenticationService');
    this.plt.ready().then(() => {
      this.checkToken();
    });
  }

  register(user) {
    console.log('user ', user);
    const encryptedPassword = CryptoJS.MD5(user.password).toString();
    user.password = encryptedPassword;
    console.log('encryptedPassword ', user.password);
    return this.storage.set(encryptedPassword, user).then(res => {
      this.authorizedLogin(user);
    });
  }

  authorizedLogin(user) {
    return this.storage.set(TOKEN_KEY, user).then(res => {
      this.authenticationState.next(true);
      this.userState.next(user);
    });
  }

  login(user) {
    console.log('login ', user);
    const encryptedPassword = CryptoJS.MD5(user.password).toString();
    console.log('encryptedPassword ', encryptedPassword);
    return this.storage.get(encryptedPassword).then(res => {
      console.log('res ', res);
      if (res && res.username === user.username) {
        this.authorizedLogin(res);
      }
    });
  }

  logout() {
    return this.storage.remove(TOKEN_KEY).then(() => {
      this.authenticationState.next(false);
      this.userState.next({});
    });
  }

  getCurrentLogin() {
    if (this.isAuthenticated) {
      return this.userState.value;
    }
    return null;
  }

  isAuthenticated() {
    return this.authenticationState.value;
  }

  checkToken() {
    console.log('checkToken');
    return this.storage.get(TOKEN_KEY).then(res => {
      console.log('checkToken ', res);
      if (res) {
        this.userState.next(res);
        this.authenticationState.next(true);
      }
    });
  }
}
