import { ChangeDetectorRef, Type } from "@angular/core";

export class WMLEndpoint {
  constructor(params:Partial<WMLEndpoint>={}){
    Object.assign(
      this,
      {
        ...params
      }
    )
  }
  url!:Function
  automate =false
}


export class WMLUIProperty{
  constructor(params:Partial<WMLUIProperty> = {}){
    Object.assign(
      this,
      {
        ...params
      }
    )
  }
  isPresent:boolean = true
  value:string = ""
  text?:string = ""
  class?:string = ""
  style:Partial<CSSStyleDeclaration> = {}
  type?:any
  click:(evt:Event)=> void = (evt?:Event)=>{
  evt?.stopImmediatePropagation()
  }
}

export class WMLRoute extends WMLUIProperty {
  constructor(params:Partial<WMLRoute>={}){
    super()
    Object.assign(
      this,
      {
        ...params
      }
    )
  }
  route:string = "/"
}


export class WMLView extends WMLUIProperty{
  constructor(params:Partial<WMLView> ={}){
    super();
    Object.assign(
      this,
      {
        ...params
      }
    )
  }

  cdref?:ChangeDetectorRef

}

export class WMLWrapper {
  constructor(params:Partial<WMLWrapper> = {}){
    Object.assign(
      this,
      {
        ...params
      }
    )
  }
  view:WMLView =new WMLView()
}


export class WMLButton extends WMLView {
  constructor(params:Partial<WMLButton> = {}){
    super()
    Object.assign(
      this,
      {
        ...params
      }
    )
  }

  textIsPresent:boolean = true
  iconSrc?:string = ""
  iconAlt?:string = ""
  iconIsPresent:boolean = false
  buttonClass?:string

}

export class WMLCustomComponent {
  constructor(params:Partial<WMLCustomComponent> = {}){
    Object.assign(
      this,
      {
        ...params
      }
    )
  }
  cpnt!:Type<any>
  meta:any
  get params(){
    return this.meta
  }
  set params(value){
    this.meta = value
  }
}

export class WMLImage extends WMLUIProperty {
  constructor(params:Partial<WMLImage> = {}){
    super()
    Object.assign(
      this,
      {
        ...params
      }
    )
  }
  src!:string
  alt!:string
  ariaLabel!:string
  ariaExpanded= false
}


export class WMLAPIPaginationResponseModel  {
  constructor(params:Partial<WMLAPIPaginationResponseModel >={}){
    Object.assign(
      this,
      {
        ...params
      }
    )
  }

  data:Array<any> =[]
  pageNum:number = 0
  pageSize!:number
  totalPages!:number
  totalItems!:number
}
