import { HttpClientModule } from '@angular/common/http';
import { Post } from './post.model';
import { Injectable } from '@angular/core';
import {Subject} from 'rxjs';
import {HttpClient} from '@angular/common/http';

@Injectable({providedIn:'root'})
export class PostsService 
{
  constructor(private http:HttpClient){}

private  posts:Post[]=[];
private postUpdated=new Subject<Post[]>();
getPosts()
{
    this.http.get<{message:string,posts:Post[]}>('http://localhost:3000/api/posts')
    .subscribe((newData)=>{
    this.posts=newData.posts;
    this.postUpdated.next([...this.posts]);
    });
}
getPostUpdateListener()
{
    return this.postUpdated.asObservable();
}
addPosts(title:string,content:string)
{
const post:Post={id:null,title:title,content:content};
this.http.post<{message:string}>('http://localhost:3000/api/posts',post)
.subscribe((responseData)=>{
console.log(responseData.message);
this.posts.push(post);
this.postUpdated.next([...this.posts]);
});

}

}