import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'formatColumn',
  standalone: true
})
export class FormatColumnPipe implements PipeTransform {

  transform(col: string): string {
    return col
      .split('_')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ');
  }
}
