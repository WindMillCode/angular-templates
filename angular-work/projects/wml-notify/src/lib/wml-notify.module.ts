import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { WmlNotifyComponent } from './wml-notify.component';
import { WmlNotifyMsgComponent } from './wml-notify-msg/wml-notify-msg.component';



@NgModule({
  declarations: [
    WmlNotifyComponent,
    WmlNotifyMsgComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    WmlNotifyComponent
  ]
})
export class WmlNotifyModule { }
