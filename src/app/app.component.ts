import {Component} from '@angular/core';
import * as firebase from 'firebase';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent {
    constructor() {
        let config = {
            apiKey: 'AIzaSyDy-cOskuHNfICLJSNcM2eLx6TDa712fGY',
            authDomain: 'ocr-developezavecangular-post.firebaseapp.com',
            databaseURL: 'https://ocr-developezavecangular-post.firebaseio.com',
            projectId: 'ocr-developezavecangular-post',
            storageBucket: 'ocr-developezavecangular-post.appspot.com',
            messagingSenderId: '375619013388'
        };
        firebase.initializeApp(config);
    }
}
