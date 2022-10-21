// angular
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, HostBinding, Input, OnInit, ViewEncapsulation } from '@angular/core';
import { WMLButton } from '@windmillcode/wml-components-base';



// rxjs
import { Subject } from 'rxjs';
import { takeUntil,tap } from 'rxjs/operators';



@Component({
  selector: 'my-social-media-card',
  templateUrl: './social-media-card.component.html',
  styleUrls: ['./social-media-card.component.scss'],
  changeDetection:ChangeDetectionStrategy.OnPush,
  encapsulation:ViewEncapsulation.None,

})
export class SocialMediaCardComponent implements OnInit {

  constructor(
    private cdref:ChangeDetectorRef,
  ) { }
  classPrefix = (val: string) => {
    return "SocialMediaCard" + val
  }
  @HostBinding('class') myClass: string = this.classPrefix(`View`);
  ngUnsub= new Subject<void>()  
  @Input('meta') meta:SocialMediaCardMeta = new SocialMediaCardMeta(); 

  ngOnInit(): void {
  }

  ngOnDestroy(){
    this.ngUnsub.next();
    this.ngUnsub.complete()
  }  

}

export class SocialMediaCardMeta extends WMLButton{
  constructor(params:Partial<SocialMediaCardMeta>={}){
    super();
    
    Object.assign(
      this,
      {
        class:null,
        value:"Social Media Button",
        ...params
      }
    )
  }
  iconClass:string="SocialMediaCardMainImg0"
}