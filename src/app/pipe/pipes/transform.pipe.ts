import { Pipe, PipeTransform } from '@angular/core';
import { Data } from '@angular/router';

@Pipe({
  name: 'transform'
})
export class TransformPipe implements PipeTransform {

  transform(value:string): any{
    let year;
    let userBirthDay;
    if(value.slice(0,1)=="2"){
       year = '19'
       userBirthDay = value.slice(5, 7) + '-' + value.slice(3, 5) + '-' + year +value.slice(1, 3);
    }
    else if(value.slice(0,1)=="3"){
      year = '20'
      userBirthDay = value.slice(5, 7) + '-' + value.slice(3, 5) + '-' + year +value.slice(1, 3);
    }
    
    // console.log(userBirthDay)
    // console.log(Date.parse(userBirthDay))
    return  userBirthDay;
  }
}
