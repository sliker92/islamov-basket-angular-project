import { Component, OnInit } from '@angular/core';
import {PostService} from '../shared/services/post.service';

@Component({
  selector: 'app-main-layout',
  templateUrl: './main-layout.component.html',
  styleUrls: ['./main-layout.component.scss']
})
export class MainLayoutComponent implements OnInit {

  // post$;
  // post;
  // article$;
  // articles;

  constructor(
    private postService: PostService
  ) { }

  ngOnInit() {
    // this.post$ = this.postService.getPosts().subscribe(
    //   value => {
    //     this.post = value;
    //   }
    // );
    // this.article$ = this.postService.getArticles().subscribe(
    //   value => {
    //     this.articles = value;
    //   }
    // );
  }


}
