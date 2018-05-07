import {Injectable} from '@angular/core';
import {Post} from '../models/Post';
import {Subject} from 'rxjs/Subject';
import * as firebase from 'firebase';

@Injectable()
export class PostService {

    posts: Post[] = [];
    postSubject = new Subject<Post[]>();


    constructor() {
    }

    emitPosts() {
        this.postSubject.next(this.posts);
    }

    savePosts() {
        firebase.database().ref('/posts').set(this.posts);
    }

    getPosts() {
        firebase.database().ref('/posts')
            .on('value', (data) => {
                this.posts = data.val() ? data.val() : [];
                this.emitPosts();
            });
    }

    createNewPost(newPost: Post) {
        console.log(newPost);
        this.posts.push(newPost);
        this.savePosts();
        this.emitPosts();
        console.log('Post ajouté avec succès');
    }

    removePost(index: number) {

        this.posts.splice(index, 1);
        this.savePosts();
        this.emitPosts();
    }

    addLike(index: number) {
        this.posts[index].loveIts++;
        this.savePosts();
        this.emitPosts();
    }

    deleteLike(index: number) {
        this.posts[index].loveIts--;
        this.savePosts();
        this.emitPosts();
    }
}
