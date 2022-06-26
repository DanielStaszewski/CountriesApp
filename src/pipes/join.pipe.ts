import { Pipe, PipeTransform, NgModule } from '@angular/core';
import { isArray } from 'src/utils/is-array';

@Pipe({
  name: 'join',
})
export class JoinPipe implements PipeTransform {
  transform(input: any, character: string = ''): any {
    if (!isArray(input)) {
      return input;
    }

    return input.join(character);
  }
}