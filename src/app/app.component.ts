import {Component} from '@angular/core';
import {Post} from './post';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent {

    posts: Post[] = [];

    constructor() {
        // Todo: Se connecter à FIREBASE

        const lorem = 'Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression.' +
            'Le Lorem Ipsum est le faux texte standard de l\'imprimerie depuis les années 1500, quand un peintre anonyme assembla' +
            'ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte.';
        for (let i = 0; i < 4; i++) {
            this.posts.push(new Post('Mon arcticle ' + i, lorem));
        }
    }
}
