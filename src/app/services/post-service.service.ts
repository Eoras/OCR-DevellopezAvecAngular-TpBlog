import { Injectable } from '@angular/core';
import {Post} from '../models/Post';
import {Subject} from 'rxjs/Subject';

@Injectable()
export class PostServiceService {

  posts: Post[] = [];
  postSubject = new Subject<Post[]>();


  constructor() { }

  emitPosts() {
      this.postSubject.next(this.posts);
  }

  savePosts() {
    // Todo
  }

  getPosts() {
      // Todo
  }

  getSinglePost(id: number) {
      // Todo
  }

  createNewPost(newPost: Post) {
      // Todo
  }

  removePost(post: Post) {
      // Todo
  }

}
