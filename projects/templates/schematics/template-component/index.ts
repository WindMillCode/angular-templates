import { Rule, apply, applyTemplates, url, move, chain, mergeWith,MergeStrategy,externalSchematic } from "@angular-devkit/schematics";
import { strings,normalize} from "@angular-devkit/core";



type TemplateComponentSchema ={
    name:string;
    path:string
}
export function generateComponentTemplate(options:TemplateComponentSchema):Rule{
  return ()=>{
    const templateSource = apply(
      url('./files'),
      [
        applyTemplates({
          classify:strings.classify,
          dasherize:strings.dasherize,
          name:options.name
        }),
        move( normalize(`/${options.path}/${strings.dasherize(options.name)}`))        
      ]
    )
    return chain([
      externalSchematic('@schematics/angular','component',options),
      mergeWith(templateSource,MergeStrategy.Overwrite)
    ])

  }
}