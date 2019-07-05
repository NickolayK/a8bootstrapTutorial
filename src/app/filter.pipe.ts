import { Pipe, PipeTransform } from '@angular/core';
import { filter } from 'minimatch';

@Pipe({
  name: 'filter',
  pure : false
})
export class FilterPipe implements PipeTransform {

  transform(value: any, filterString :string ,propName:string): any {
    if(value.length === 0 || filterString === ''){
      return value
    }
    const resultArray = [];
      for (const item of value){

       
            if(item[propName].indexOf( filterString) !== -1){
                 resultArray.push(item)
            }
        
      }
      return resultArray;
    
  }

}
