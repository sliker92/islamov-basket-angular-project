import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { PostsService } from '../../../shared/services/posts.service';

@Component({
  selector: 'app-news-create',
  templateUrl: './news-create.component.html',
  styleUrls: ['./news-create.component.scss']
})
export class NewsCreateComponent implements OnInit {

  post;
  postForm: FormGroup;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private postsService: PostsService,
    private fb: FormBuilder
  ) {
  }

  ngOnInit() {
    this.formBuild();
  }

  formBuild() {
    this.postForm = this.fb.group({
      title: [ { value: '', disabled: false }, [ Validators.required ] ],
      publisher: [ { value: '', disabled: false }, [ Validators.required ] ],
      image: [ { value: '', disabled: false }, [ Validators.required ] ],
      summary: [ { value: '', disabled: false }, [ Validators.required ] ],
      tags: [ { value: '', disabled: false }, [ Validators.required ] ],
    });
  }

  onSubmit() {
    this.postForm.value.id = this.generateID(1, 1000);
    this.postForm.value.timestamp = Date.now();
    this.postsService.add(this.postForm.value, 'news');
    this.router.navigate(['/']);
  }

  generateID(min, max) {
    return Math.floor( Math.random() * ( max - min + 1 ) ) + min;
  }
}
