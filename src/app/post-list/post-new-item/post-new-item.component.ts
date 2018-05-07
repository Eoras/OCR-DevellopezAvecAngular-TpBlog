import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {PostService} from '../../services/post.service';
import {Router} from '@angular/router';
import {Post} from '../../models/Post';

@Component({
  selector: 'app-post-new-item',
  templateUrl: './post-new-item.component.html',
  styleUrls: ['./post-new-item.component.scss']
})
export class PostNewItemComponent implements OnInit {

  postForm = FormGroup;

  constructor(private postService: PostService, private router: Router, private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.initForm();
  }

  initForm() {
    this.postForm = this.formBuilder.group({
        title: ['', Validators.required],
        content: ['', Validators.required]
      });
  }

  onSubmitPostForm(post: Post) {
      const title = this.postForm.get('title').value;
      const content = this.postForm.get('content').value;
      const newPost = new Post(title, content);
      this.postService.createNewPost(newPost);
      this.router.navigate(['/posts']);
      console.log('Redirection vers la liste des posts');
  }

}
