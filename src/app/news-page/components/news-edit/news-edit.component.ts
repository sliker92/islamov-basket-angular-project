import { Component, OnInit } from '@angular/core';
import { switchMap } from 'rxjs/operators';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { PostsService } from '../../../shared/services/posts.service';
import { Observable } from 'rxjs';
import { News } from '../../models/news.interface';
import { FormControl, FormGroup } from '@angular/forms';
import { news } from '../../../fake-back-end/data/news';

@Component({
  selector: 'app-news-edit',
  templateUrl: './news-edit.component.html',
  styleUrls: [ './news-edit.component.scss' ]
})
export class NewsEditComponent implements OnInit {

  post$: Observable<News[]>;
  post;
  label = 'Сохранить';

  form = new FormGroup({
    postEdit: new FormGroup({
      title: new FormControl(''),
      tags: new FormControl(''),
      publisher: new FormControl(''),
      image: new FormControl(''),
      summary: new FormControl(''),
    })
  });

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private postsService: PostsService) {
  }

  ngOnInit() {
    this.route.paramMap
      .pipe(
        switchMap((params: Params) => this.post$ = this.postsService.getPostByID(+params.get('id'), 'news'))
      ).subscribe((data) => {
      this.post = data;
    });
  }

  onSubmit() {
    console.log('Submit:', this.form.value.postEdit);
    this.postsService.update(this.form.value.postEdit);
  }

}
