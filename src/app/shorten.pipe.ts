import { PipeTransform, Pipe } from '@angular/core';

@Pipe({
    name:'shorten',
    pure: false
})

export class ShortenPipe implements PipeTransform{

    transform(value :any , length :number ){
        if(value.length > length){
            return value.slice(0, length)+ ' ...';
        }
        return 'value'
    }


}