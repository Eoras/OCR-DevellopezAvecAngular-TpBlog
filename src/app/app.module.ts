import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PostListComponent } from './post-list/post-list.component';
import { Route, RouterModule } from '@angular/router';
import { PostNewItemComponent } from './post-list/post-new-item/post-new-item.component';
import {PostService} from './services/post.service';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {NavBarComponent} from './nav-bar/nav-bar.component';

const appRoutes: Route[] = [
    { path: 'posts', component: PostListComponent },
    { path: 'new', component: PostNewItemComponent },
    { path: '**', redirectTo: '/posts' }
];

@NgModule({
  declarations: [
    AppComponent,
    PostListComponent,
    NavBarComponent,
    PostNewItemComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(appRoutes)

  ],
  providers: [
      PostService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
