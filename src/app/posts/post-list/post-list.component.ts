import { PostsService } from './../posts.service';
import { Component, OnInit,Input } from '@angular/core';
import { Post } from '../post.model';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit {

  // posts=[
  //   {title:'First Post',content:'This is my first post\'s content'},
  //   {title:'Second Post',content:'This is my second post\'s content'},
  //   {title:'Third Post',content:'This is my third post\'s content'},
  // ]
 posts:Post[]=[];
  constructor(public postsService:PostsService) { }

  ngOnInit() {
    this.posts=this.postsService.getPosts();
  }

  
}
