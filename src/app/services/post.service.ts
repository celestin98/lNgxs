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
    return this.http.get<Post[]>('https://my-json-server.typicode.com/celestin98/lNgxs/postsDb');
  }

  deletePost(id: number) {
    return this.http.delete(`https://my-json-server.typicode.com/celestin98/lNgxs/postsDb/${id}`);
  }

  addPost(payload: Post) {
    return this.http.post<Post>('https://my-json-server.typicode.com/celestin98/lNgxs/postsDb/', payload);
  }

  updatePost(payload: Post, id: number) {
    return this.http.put<Post>(`https://my-json-server.typicode.com/celestin98/lNgxs/postsDb/${id}`, payload);
  }
}
