import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {NgxsModule} from "@ngxs/store";
import {NgxsLoggerPluginModule} from "@ngxs/logger-plugin";
import {NgxsReduxDevtoolsPluginModule} from "@ngxs/devtools-plugin";
import {RouterModule} from "@angular/router";
import {CommonModule} from "@angular/common";
import { NewPostComponent } from './component/new-post/new-post.component';
import { PostListComponent } from './component/post-list/post-list.component';
import {PostState} from "./states/Post.state";
import {HttpClientModule} from "@angular/common/http";


@NgModule({
  declarations: [
    AppComponent,
    NewPostComponent,
    PostListComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forRoot([]),
    BrowserModule,
    HttpClientModule,
    NgxsModule.forRoot([
      PostState
      ]
    ),
    NgxsReduxDevtoolsPluginModule.forRoot(),
    NgxsLoggerPluginModule.forRoot(),

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
