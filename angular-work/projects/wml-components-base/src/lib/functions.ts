import { Type, ViewContainerRef } from "@angular/core";

export let addCustomComponent =(vcf:ViewContainerRef,cpnt:Type<any>,meta:any)=>{
  let {instance} =  vcf.createComponent(cpnt )
  instance.meta =meta
  instance.params =meta
  instance.ngOnInit()
}


export let updateClassString=(obj:any,myClassDefault:string,classListDefault:string)=>{

  return (val:string,type:"add"|"remove"="add")=>{
      let myClass=myClassDefault
      let classList=classListDefault
      if(type === "add"){
        obj[classList].push(val)
      }
      else if(type === "remove"){
        obj[classList] = (obj[classList])
        .filter((targetClass:string)=>{
          return targetClass !== val
        })
      }
      obj[myClass] = obj[classList]
      .reduce((acc:string,x:string)=>{
        return acc+ " " +  x
      },"")
    }
}
