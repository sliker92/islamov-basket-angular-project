import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { PostsService } from '../../../shared/services/posts.service';
import { Article } from '../../models/article.interface';

@Component({
  selector: 'app-articles-edit',
  templateUrl: './articles-edit.component.html',
  styleUrls: ['./articles-edit.component.scss']
})

export class ArticlesEditComponent implements OnInit {

  post: Article;
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
    this.postForm.value.date = new Date();
    this.postsService.update(this.postForm.value, 'articles')
      .subscribe(value => {
          value.forEach(
            obj => {
              if (obj.id === this.postForm.value.id) {
                obj.title = this.postForm.value.title;
                obj.publisher = this.postForm.value.publisher;
                obj.image = this.postForm.value.image;
                obj.summary = this.postForm.value.summary;
                obj.tags = this.postForm.value.tags;
              }
            });
        }
      );
    this.router.navigate(['/']);
  }
}
