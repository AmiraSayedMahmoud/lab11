import { Pipe, PipeTransform } from '@angular/core';
import { Data } from '@angular/router';

@Pipe({
  name: 'transform'
})
export class TransformPipe implements PipeTransform {

  transform(value:string): string{
    // let userBirthDay = new Date();
    return this. getBirthDay.find(item=>item.key==value)?.value!;
  }
  getBirthDay:{key:string,value:string}[]=[
    {key: "29909011509345",value:"01-09-1999"}
  ]
}
