import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams, HttpEventType } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { catchError , tap} from 'rxjs/operators'

import { Post } from './../post.model'
import { Observable, Subject , throwError } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class PostService {

  errorSubject = new   Subject<string>();

  constructor( private http : HttpClient) { }

   fetchPosts() : Observable<Post[]>{

    let searchParams = new HttpParams();
    searchParams =  searchParams.append('print','pretty');
    searchParams =  searchParams.append('custom', 'key');

   return  this.http.get<{ [key:string] : Post}>(
     'https://a8course.firebaseio.com/posts.json' , 
      {
        headers: new HttpHeaders({
          "Custom-Header" : 'Hello'
        }),
        params : searchParams,
        responseType : 'json'
      }
     )
     .pipe(
      map(  ( responseData  ) =>{
          const postArray : Post[] = [];
          for ( const key in responseData){

            if( responseData.hasOwnProperty(key)){
              postArray.push( {...responseData[key] ,  id : key });

            }
                
          }
          return postArray;
      }),
      catchError( (err)=> {
         return throwError(err);
      })
      
    )};

    // createPost(postData :Post){
    //   return this.http
    //   .post<{ 'name' :string }>(
    //     'https://a8course.firebaseio.com/posts.json',
    //     postData
    //   ).subscribe( (response)=>{
    //     console.log(response)
    //   }, (err)=>{
    //      this.errorSubject.next(err.massage)
    //   })
      
    // }

    createPost(postData :Post){
      return this.http
      .post<{ 'name' :string }>(
        'https://a8course.firebaseio.com/posts.json',
        postData ,  { 
          observe : 'response'
        }
      ).subscribe( (response)=>{
        console.log(response)
      }, (err)=>{
         this.errorSubject.next(err.massage)
      })
      
    }
    deletePosts(){

     return this.http.delete('https://a8course.firebaseio.com/posts.json',
      { 
        observe : 'events',
        responseType : 'text'
      }).pipe(
        tap( (event=>{
          if( event.type === HttpEventType.Sent){
            // ...
          }
          if( event.type === HttpEventType.Response){
               console.log(event.body);
          }
           
        })
      )
      )};

}
