import {Post} from "../model/post";
import {Action, Selector, State, StateContext} from "@ngxs/store";
import {PostService} from "../services/post.service";
import {AddPost, DeletePost, GetPosts, SetSelectedPost, UpdatePost} from "../action/post.action";
import {tap} from "rxjs";
import {Injectable} from "@angular/core";

export class PostStateModel {
  posts: Post[] = [];
  postsLoaded: boolean = false;
}

@State<PostStateModel>({
  name: 'posts',
  defaults: {
    posts: [],
    postsLoaded: false
  }
})

@Injectable()
export class PostState {

  constructor(private postService: PostService) {
  }

  @Selector()
  static getPostList(state: PostStateModel) {
    return state.posts;
  }

  @Selector()
  static postLoader(state: PostStateModel) {
    return state.posts;
  }


  @Action(GetPosts)
  getPosts({getState, setState}: StateContext<PostStateModel>) {
    return this.postService.fetchPosts().pipe(tap((result) => {
      const state = getState();
      setState({
        ...state,
        posts: result,
        postsLoaded:true
      });
    }));
  }

  @Action(AddPost)
  addPost({getState, patchState}: StateContext<PostStateModel>, {payload}: AddPost) {
    return this.postService.addPost(payload).pipe(tap((result) => {
      const state = getState();
      patchState({
        posts: [...state.posts, result]
      });
    }));
  }

  @Action(UpdatePost)
  updatePost({getState, setState}: StateContext<PostStateModel>, {payload, id}: UpdatePost) {
    return this.postService.updatePost(payload, id).pipe(tap((result) => {
      const state = getState();
      const postList = [...state.posts];
      const postIndex = postList.findIndex(item => item.id === id);
      postList[postIndex] = result;
      setState({
        ...state,
        posts: postList,
      });
    }));
  }


  @Action(DeletePost)
  deletePost({getState, setState}: StateContext<PostStateModel>, {id}: DeletePost) {
    return this.postService.deletePost(id).pipe(tap(() => {
      const state = getState();
      const filteredArray = state.posts.filter(item => item.id !== id);
      setState({
        ...state,
        posts: filteredArray,
      });
    }));
  }


}
