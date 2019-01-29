import { NgModule } from '@angular/core';
import { FooterComponent } from './footer/footer.component';
import { SharedModule } from '../shared.module';

@NgModule({
  declarations: [FooterComponent],
  imports: [
    SharedModule
  ],
  exports: [FooterComponent]
})
export class ComponentsModule { }
