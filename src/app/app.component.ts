import { Component, OnInit, OnDestroy } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

import { Post } from './post.model'
import { PostService } from './services/post.service';
import { Subscription } from 'rxjs';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit , OnDestroy{
  loadedPosts : Array<Post> = [];
  isFetching = false ;
  error = null;
  errorSubscription : Subscription;

  myText = 'sdsd'

  constructor(private postService : PostService ) {}

  ngOnInit() {
    this.fetchPosts();
    this.errorSubscription =  this.postService.errorSubject.subscribe( (error) =>{
        this.error = error;
    })
  }

  onCreatePost(postData: Post) {
    // Send Http request
      this.postService.createPost(postData)

  }

  onFetchPosts() {
    // Send Http request
    this.fetchPosts();
  }
  onHendleError(){
    this.error = null;
  }

  onClearPosts() {
    
      this.postService.deletePosts().subscribe( ()=>{
        this.fetchPosts();
      });
    
    
  }

   fetchPosts(){
      this.isFetching = true;

      this.postService.fetchPosts()

      .subscribe( (data)=>{
            this.loadedPosts = data;
            this.isFetching = false;
    } , (err)=>{
      this.error = err.message;
      this.isFetching = false;
   });
  }

  ngOnDestroy(){
    this.errorSubscription.unsubscribe();
  }
}