import {Component, OnDestroy, OnInit} from '@angular/core';
import {Observable, Subscription} from "rxjs";
import {Post} from "../../model/post";
import {PostState} from "../../states/Post.state";
import {Select, Store} from "@ngxs/store";
import {GetPosts} from "../../action/post.action";

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit, OnDestroy {

  @Select(PostState.getPostList) postList!: Observable<Post[]>;
  postLoaded: Observable<boolean>;
  postLoadedSub = new Subscription();

  constructor(private store: Store) {
    this.postLoaded = this.store.select(state => state.posts.postLoaded);
  }

  ngOnInit(): void {
    this.getPostList();
  }

  ngOnDestroy() {
    this.postLoadedSub.unsubscribe();
  }

  getPostList() {
    this.postLoadedSub = this.postLoaded.subscribe(res => {
      if (!res) {
        this.store.dispatch(new GetPosts());
      }
    })

  }

}
