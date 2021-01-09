import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterImage'
})
export class FilterImagePipe implements PipeTransform {

  transform(items: any[], cake: string): any {
    if(cake === 'all'){ return items } else
    return items.filter(item =>{
      return item.type === cake;
    });
  }

}
