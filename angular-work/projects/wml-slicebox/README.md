# WmlSlicebox

This library was generated with [Angular CLI](https://github.com/angular/angular-cli) version 15.0.0. but is comptablile as far back as angular 11. this design was remodeled by older code found in this [link](https://tympanus.net/Development/Slicebox/). Remastered for angular w/ additional features. to be used as a carousel

![](https://github.com/WindMillCode/angular-templates/blob/master/angular-work/projects/wml-slicebox/docs/promo.gif)





## Usage
```shell
npm install -s @windmillcode/wml-slicebox
```

* import wml-slicebox into the needed module
```ts
// angular
import { NgModule } from '@angular/core';


import { WmlSliceboxModule } from '@windmillcode/wml-slicebox';


@NgModule({
  declarations: [
    ...
  ],
  imports: [
    WmlSliceboxModule
  ],
})
export class TargetModule { }

```

* the use it in your component thats it
```ts
import { WmlSliceboxImg, WmlSliceboxParams } from '@windmillcode/wml-slicebox';

  sliceBoxParams = new WmlSliceboxParams({
    images: WmlSliceboxImg[],
  });

```

```html
    <wml-slicebox [params]="sliceBoxParams" ></wml-slicebox>
```

## Full Sample

```ts
import { WmlSliceboxImg, WmlSliceboxParams } from '@windmillcode/wml-slicebox';
import { faker } from '@faker-js/faker';
  pickers=[]
  images: WmlSliceboxImg[] = Array(5)
  .fill(null)
  .map((nullVal, index0) => {

    let img = new WmlSliceboxImg({
      src:faker.image.abstract(),//REPLACE with your image here
      value: index0.toString(),
    });

    this.pickers.push({
      value:index0,
      class:"unpicked"
    })

    return img;
  });

  sliceBoxParams = new WmlSliceboxParams({
    images: this.images,
    orientation:"v",
    // nextRotationDegree:"360deg",
    disperseFactor:40,
    disperseSpeed:4000,
    speed:1500,
    sequentialFactor:150,
    autoplay:false,
  });

  moveToNextSlide =()=>{
    this.sliceBoxParams.moveToNextSlideSubj.next()
  }

  moveToPrevSlide =()=>{
    this.sliceBoxParams.moveToPrevSlideSubj.next()
  }

  jumpToSlide = (myPicker:HomeMainPicker)=>{
    this.pickers
    .forEach((picker)=>{
      picker.class ="unpicked"
    })
    myPicker.class = "picked"

    this.sliceBoxParams.jumpToSlideSubj.next(myPicker.value)
    this.cdref.detectChanges()
  }
```

<!-- uses font awesome icons -->
```html
<div >
  <section >
    <div class=icon (click)="moveToPrevSlide()">
      <i class="fa-solid fa-chevron-left"></i>
    </div>
    <wml-slicebox [params]="sliceBoxParams" class=useThisClassToResizeSlicebox></wml-slicebox>
    <div class=icon (click)="moveToNextSlide()">
      <i class="fa-solid fa-chevron-right"></i>
    </div>
  </section>
  <section >
    <div (click)="jumpToSlide(picker)" [class]="picker.class" *ngFor="let picker of pickers">
      <label>{{picker.value}}</label>
    </div>
  </section>
</div>

```
## Configs


 Name          | Type | Desc
 ------------- | ------------------- | -------------------
 images | WmlSliceboxImg[]| an array of images to provide to the slicebox
 reverse| boolean | whether to reverse the default rotation
 sliceboxSizeUseProvidedValues | boolean | whether to resize to fill the parent elemnt or use the specified height and width of the slicebox provided by sliceboxSize
 orientation | 'v' | 'h'; | whether to rotate vertically or horzontally
 perspective | px value | same as perspective defnition in graphic design
 interval | number | milliseconds before the carousel navigates if autoplay is true
 disperseFactor | number | how far away in pixels should the cuboids coordinate to move away from the center
 disperseSpeed | number | time in ms of how fast the cuboids coordinate to move away from the center
 colorHiddenSides| hex value, rgba, hsla | color of the sides of the cuboid where the image is not shown
 sequentialFactor | number | time in ms before each cuboid consectiuvely rotates
 speed | number | how fast each cuboid is supposed to rotate
 easing | css animation easing types | the animation type
 autoplay | boolean | whether the carousel should continue or not
 nextRotationDegree | css degree string | when provided overrides the default rotation to have the next slides rotate according to your desires
 prevRotationDegree  | css degree string | when provided overrides the default rotation to have the next slides rotate according to your desires
resizeDelay | number | amount of time to debouce before the caoursel resize itself, its best to leave this value alone
moveToNextSlideSubj  | subject | not to be editied to be used, indicates to the slicebox to move to the next slide when autoplay is false
moveToPrevSlideSubj  | subject | not to be editied to be used, indicates to the slicebox to move to the previous slide when autoplay is false
jumpToSlideSubj  | subject | not to be editied to be used, indicates to the slicebox to jump to the slide slide when autoplay is false, if slide is greater than current does a nextRotationDegree else it does a prev rotation degree

