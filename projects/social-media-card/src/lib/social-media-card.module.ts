import { NgModule } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { SocialMediaCardComponent } from './social-media-card.component';



@NgModule({
  declarations: [
    SocialMediaCardComponent
  ],
  imports: [
    TranslateModule
  ],
  exports: [
    SocialMediaCardComponent
  ]
})
export class SocialMediaCardModule { }
