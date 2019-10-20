import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {PostService} from '../../services/post.service';
import {switchMap} from 'rxjs/operators';
import {Article} from '../../interfaces/article.interface';

@Component({
  selector: 'app-article-info',
  templateUrl: './article-info.component.html',
  styleUrls: ['./article-info.component.scss']
})
export class ArticleInfoComponent implements OnInit {

  post: Article[];

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private postService: PostService) {}

  ngOnInit() {
    this.route.paramMap
      .pipe(
        switchMap((params) => this.postService.getPostByID(+params.get('id'), 'articles'))
      ).subscribe((data) => {
      this.post = data;
    });
  }
}
