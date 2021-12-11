import {Component, OnInit} from '@angular/core';
import {Store} from "@ngxs/store";
import {AddPost} from "../../action/post.action";
import {FormGroup} from "@angular/forms";

@Component({
  selector: 'app-new-post',
  templateUrl: './new-post.component.html',
  styleUrls: ['./new-post.component.css']
})
export class NewPostComponent implements OnInit {
  postForm:FormGroup;

  constructor(private store: Store) {
  }

  ngOnInit(): void {
  }

  Ajouter(title: string, body: string) {
    this.store.select(state => state.posts.posts)
      .subscribe(value => console.log(value));
    this.store.dispatch(new AddPost({
      id: 0,
      title: title,
      body: body,
      userId: 1
    }))
  }
}
