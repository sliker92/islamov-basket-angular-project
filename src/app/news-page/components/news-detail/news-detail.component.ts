import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { News } from '../../models/news.interface';
import { PostsService } from '../../../shared/services/posts.service';

@Component({
  selector: 'app-news-detail',
  templateUrl: './news-detail.component.html',
  styleUrls: ['./news-detail.component.scss']
})
export class NewsDetailComponent implements OnInit {

  post;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private postsService: PostsService) {}

  ngOnInit() {
    this.route.paramMap
      .pipe(
        switchMap((params) => this.postsService.getPostByID(+params.get('id'), 'news'))
      ).subscribe((data) => {
      this.post = data;
    });
  }
}
