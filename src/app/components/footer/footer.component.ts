import { Component, OnInit } from '@angular/core';
import { LanguageService } from 'src/app/services/language.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  constructor(private langService: LanguageService) { }

  ngOnInit() {
  }

  changeLanguage(lang: string) {
    if (this.langService.langState.value !== lang) {
      this.langService.changeLanguage(lang);
    }
  }

}
