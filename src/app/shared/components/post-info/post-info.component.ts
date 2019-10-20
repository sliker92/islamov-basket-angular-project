import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {PostService} from '../../services/post.service';
import {Post} from '../../interfaces/post.interface';
import {switchMap} from 'rxjs/operators';

@Component({
  selector: 'app-post-info',
  templateUrl: './post-info.component.html',
  styleUrls: ['./post-info.component.scss']
})
export class PostInfoComponent implements OnInit {

  post: Post[];

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private postService: PostService) {}

  ngOnInit() {
    this.route.paramMap
      .pipe(
        switchMap((params) => this.postService.getPostByID(+params.get('id'), 'news'))
      ).subscribe((data) => {
        this.post = data;
    });
  }
}
