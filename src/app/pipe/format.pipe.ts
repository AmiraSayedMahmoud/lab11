import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'format'
})
export class FormatPipe implements PipeTransform {

  transform(value: string): any {
    let criditCard = value.slice(0,4) + '-' + value.slice(4,8) + '-' + value.slice(8,12) + '-' + value.slice(12,16)
    return criditCard;
  }

}
