import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  constructor(private translate: TranslateService) { }

  ngOnInit() {
  }

  changeLanguage(lang: string) {
    console.log('current lang ', this.translate.currentLang);
    console.log('lang choosen ', lang);
    this.translate.use(lang);
  }

}
