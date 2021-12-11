import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Post} from "../model/post";


@Injectable({
  providedIn: 'root'
})
export class PostService {
  constructor(private http: HttpClient) {
  }

  fetchPosts() {
    return this.http.get<Post[]>('https://jsonplaceholder.typicode.com/celestin98/lNgxs/postsDb/');
  }

  deletePost(id: number) {
    return this.http.delete(`https://jsonplaceholder.typicode.com/celestin98/lNgxs/postsDb/${id}`);
  }

  addPost(payload: Post) {
    return this.http.post<Post>('https://jsonplaceholder.typicode.com/celestin98/lNgxs/posts/', payload);
  }

  updatePost(payload: Post, id: number) {
    return this.http.put<Post>(`https://jsonplaceholder.typicode.com/celestin98/lNgxs/posts/${id}`, payload);
  }
}
