import { Rule, apply, applyTemplates, url, move, chain, mergeWith,MergeStrategy,externalSchematic } from "@angular-devkit/schematics";
import { strings,normalize} from "@angular-devkit/core";



type TemplateComponentSchema ={
    name:string;
    cpntType:string,
    path:string,
    project:string
    standalone:boolean
}
export function generateComponentTemplate(options:TemplateComponentSchema):Rule{
  return ()=>{
    const templateSource = apply(
      url('./files'),
      [
        applyTemplates({
          classify:strings.classify,
          dasherize:strings.dasherize,
          name:options.name,
          cpntType:options.cpntType,
          standalone:options.standalone
        }),
        move( normalize(`/${options.path}/${strings.dasherize(options.name)}`))
      ]
    )
    return chain([
      externalSchematic('@schematics/angular','component',{
        name:options.name,
        standalone:options.standalone,
        path:options.path,
        project:options.project,
        style:"scss"
      }),
      mergeWith(templateSource,MergeStrategy.Overwrite)
    ])

  }
}
