import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LanguageService {

  langState = new BehaviorSubject('en');

  constructor() {
  }

  changeLanguage(lang: string) {
    this.langState.next(lang);
  }
}
