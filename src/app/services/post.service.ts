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
    return this.http.get<Post[]>('http://localhost:3000/postsDb');
  }

  deletePost(id: number) {
    return this.http.delete(`http://localhost:3000/postsDb/${id}`);
  }

  addPost(payload: Post) {
    return this.http.post<Post>('http://localhost:3000/postsDb/', payload);
  }

  updatePost(payload: Post, id: number) {
    return this.http.put<Post>(`http://localhost:3000/postsDb/${id}`, payload);
  }
}
