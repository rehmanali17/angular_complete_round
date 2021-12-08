import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter',
})
export class FilterPipe implements PipeTransform {
  transform(items: { name: string; status: string }[], filterString: string) {
    const outputArray = [];
    if (filterString === '') {
      outputArray.push(...items);
    } else {
      for (const item of items) {
        if (item.status === filterString) {
          outputArray.push(item);
        }
      }
    }
    return outputArray;
  }
}
