import { HttpInterceptor, HttpRequest, HttpHandler, HttpEventType } from '@angular/common/http';

import { tap } from 'rxjs/operators'


export class AuthInterceptorService implements HttpInterceptor {

    intercept( req : HttpRequest<any> ,  next : HttpHandler){

        const modifiedRequest = req.clone( { headers: req.headers.append('Auth' ,'xyz') });

        console.log('request is on its way');
        return next.handle(modifiedRequest)
    }
}