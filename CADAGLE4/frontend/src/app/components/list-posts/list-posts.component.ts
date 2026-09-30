import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Post } from '../../models/post.model';

@Component({
  selector: 'app-list-posts',
  standalone: false,
  templateUrl: './list-posts.component.html',
  styleUrl: './list-posts.component.css'
})
export class ListPostsComponent implements OnInit {
  posts?: Post[] = [];

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.initData();
  }

  initData(): void {
    this.http.get<Post[]>('https://localhost:7035/api/post')
      .subscribe({
        next: (data: Post[]) => {
          this.posts = data;
          console.log(this.posts);
        }
      })
  }
}
