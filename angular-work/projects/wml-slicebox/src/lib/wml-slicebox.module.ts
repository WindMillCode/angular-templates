import { TranslateModule } from '@ngx-translate/core';
import { ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { WmlSliceboxComponent } from './wml-slicebox/wml-slicebox.component';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [
    WmlSliceboxComponent,
  ],
  imports: [
    TranslateModule,
    ReactiveFormsModule,
    CommonModule

  ],
  exports:[
    WmlSliceboxComponent
  ]
})
export class WmlSliceboxModule { }
