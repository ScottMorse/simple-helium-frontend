import { DTO } from "./typeUtils"

export class ObjClassWrapper {
  constructor(dataObj: DTO<ObjClassWrapper>){
    for(const [key, val] of Object.entries(dataObj)){
      (this as { [key: string]: any })[key] = val
    }
  }

  public asPlainObj(){
    return Object.entries(this).reduce<DTO<this>>((obj, [key, val]) => {
      (obj as { [key: string]: any }) = val
      return obj
    }, {} as DTO<this>)
  }
}