import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { debounceTime} from 'rxjs/operators';

import { News } from '../../models/news.interface';
import { AuthService } from '../../../auth/services/auth.service';

@Component({
  selector: 'app-news-detail',
  templateUrl: './news-detail.component.html',
  styleUrls: ['./news-detail.component.scss']
})

export class NewsDetailComponent implements OnInit {

  post: News;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    public authService: AuthService
  ) {}

  ngOnInit() {
    this.route.data.pipe(
      debounceTime(500)
    ).subscribe(data => {
      this.post = data.post;
    });
  }

  toPostEdit() {
    this.router.navigate([`/news/${this.post.id}/edit`]);
  }
}
