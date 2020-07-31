
import { PostsService } from './../posts.service';
import { Component, OnInit,Input, OnDestroy } from '@angular/core';
import { Post } from '../post.model';
import {Subscription  } from 'rxjs';
import { throwToolbarMixedModesError } from '@angular/material/toolbar';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit {

  isLoading=false;
  // posts=[
  //   {title:'First Post',content:'This is my first post\'s content'},
  //   {title:'Second Post',content:'This is my second post\'s content'},
  //   {title:'Third Post',content:'This is my third post\'s content'},
  // ]
 posts:Post[]=[];
 private postsSub:Subscription;
  constructor(public postsService:PostsService) { }

  // ngOnDestroy() {
  //   this.postsSub.unsubscribe();
  // }

  ngOnInit() {
    this.isLoading=true;
   this.postsService.getPosts();
    this.postsService.getPostUpdateListener()
    .subscribe((posts:Post[])=>
    {
     this.isLoading=false;
     this.posts=posts;
    });
  }

  onDelete(postId:string){
    this.postsService.deletePost(postId);
  }
  


  
}
