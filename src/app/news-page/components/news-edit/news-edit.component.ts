import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { PostsService } from '../../../shared/services/posts.service';
import { News } from '../../models/news.interface';

@Component({
  selector: 'app-news-edit',
  templateUrl: './news-edit.component.html',
  styleUrls: [ './news-edit.component.scss' ]
})

export class NewsEditComponent implements OnInit {

  post: News;
  postForm: FormGroup;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private postsService: PostsService,
    private fb: FormBuilder
  ) { }

  ngOnInit() {
    this.formBuild();
    this.route.data
      .subscribe(data => {
        this.post = data.post;
        this.setFormValue();
        this.postForm.patchValue({ tags: this.post.tags });
      });
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

  setFormValue() {
    this.postForm.patchValue({ title: this.post.title });
    this.postForm.patchValue({ publisher: this.post.publisher });
    this.postForm.patchValue({ image: this.post.image });
    this.postForm.patchValue({ summary: this.post.summary });
    this.postForm.patchValue({ tags: this.post.tags });
  }

  onSubmit() {
    this.postForm.value.id = this.post.id;
    this.postsService.update(this.postForm.value, 'news')
      .subscribe(value => {
          value.forEach(
            obj => {
              if (obj.id === this.postForm.value.id) {
                obj.title = this.postForm.value.title;
                obj.publisher = this.postForm.value.publisher;
                obj.image = this.postForm.value.image;
                obj.summary = this.postForm.value.summary;
                obj.tags = this.postForm.value.tags;
                obj.date = new Date();
              }
            });
        }
      );
    this.router.navigate([ '/' ]);
  }
}
