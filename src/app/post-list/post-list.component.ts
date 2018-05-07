import {Component, OnDestroy, OnInit} from '@angular/core';
import {Post} from '../models/Post';
import {Subscription} from 'rxjs/Subscription';
import {Router} from '@angular/router';
import {PostService} from '../services/post.service';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.scss']
})
export class PostListComponent implements OnInit, OnDestroy {

    posts: Post[] = [];
    postSubscription: Subscription;

    constructor(private postService: PostService, private router: Router) {
    }

    ngOnInit() {
        this.postSubscription = this.postService.postSubject.subscribe(
            (posts: Post[]) => {
                this.posts = posts;
            }
        );
        this.postService.getPosts();
        this.postService.emitPosts();
    }

    ngOnDestroy() {
        this.postSubscription.unsubscribe();
    }

    onAddLike(post: Post) {
        this.postService.addLike(post);
    }

    onDeleteLike(post: Post) {
        this.postService.deleteLike(post);
    }

    onDeletePost(post: Post) {
        this.postService.removePost(post);
    }

}
