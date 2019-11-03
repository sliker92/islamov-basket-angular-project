import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { Article } from '../../models/article.interface';
import { PostsService } from '../../../shared/services/posts.service';

@Component({
  selector: 'app-articles-detail',
  templateUrl: './articles-detail.component.html',
  styleUrls: ['./articles-detail.component.scss']
})
export class ArticlesDetailComponent implements OnInit {

  post;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private postsService: PostsService) {}

  ngOnInit() {
    this.route.paramMap
      .pipe(
        switchMap((params) => this.postsService.getPostByID(+params.get('id'), 'articles'))
      ).subscribe((data) => {
      this.post = data;
    });
  }
}
