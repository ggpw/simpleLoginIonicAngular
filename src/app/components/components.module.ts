import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FooterComponent } from './footer/footer.component';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  declarations: [FooterComponent],
  imports: [
    CommonModule,
    IonicModule,
    TranslateModule.forChild()
  ],
  exports: [FooterComponent]
})
export class ComponentsModule { }
