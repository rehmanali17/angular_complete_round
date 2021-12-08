import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'power',
})
export class PowerPipe implements PipeTransform {
  transform(base: number, power: number) {
    return Math.pow(base, power);
  }
}
