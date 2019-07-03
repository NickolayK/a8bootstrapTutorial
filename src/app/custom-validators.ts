import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';

export class CustomValidators {

    static projectNameValidator (control :FormControl):{[s:string]:boolean}{
        if(control.value === 'test'){

            return { 'forbbidenName' : true}
        }else {
          return null;
        }
    }

    static asyncNameValidator( control :FormControl): Promise<any> | Observable<any>{
      const promise = new Promise( (resolve , reject)=>{


        setTimeout(() => {
          console.log(this)
          if(control.value === 'testProject'){
            resolve( {
              'forbbidenName' : true
            })
          }else{
            resolve(null);
          }
        }, 2000);


      });
      return promise;
    }
  
}
