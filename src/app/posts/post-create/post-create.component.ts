import { PostsService } from './../posts.service';
import { Component, OnInit ,EventEmitter,Output} from '@angular/core';
import { Post } from '../post.model';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-post-create',
  templateUrl: './post-create.component.html',
  styleUrls: ['./post-create.component.css']
})
export class PostCreateComponent implements OnInit {
  
  constructor( public postsService:PostsService) { }

  ngOnInit(): void { }
  onAddPost( form:NgForm)
  { 
      this.postsService.addPosts(form.value.title,form.value.content);
  }

}
