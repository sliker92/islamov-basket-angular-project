import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { Article } from '../../models/article.interface';
import { AuthService } from '../../../auth/services/auth.service';
import { debounceTime } from 'rxjs/operators';

@Component({
  selector: 'app-articles-detail',
  templateUrl: './articles-detail.component.html',
  styleUrls: [ './articles-detail.component.scss' ]
})
export class ArticlesDetailComponent implements OnInit {

  post: Article;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    public authService: AuthService) {}

  ngOnInit() {
    this.route.data.pipe(
      debounceTime(500)
    ).subscribe(data => {
      this.post = data.post;
    });
  }

  toPostEdit() {
    this.router.navigate([ `/articles/${ this.post.id }/edit` ]);
  }
}
