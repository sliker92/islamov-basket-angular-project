import {AfterContentChecked, Component, Input, OnInit} from '@angular/core';
import {Post} from '../../interfaces/post.interface';
import {news} from '../../../fake-back-end/data/news';
import {PostService} from '../../services/post.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {

  post$;
  post;

  constructor(
    private postService: PostService
  ) { }

  ngOnInit() {
    this.post$ = this.postService.getPosts().subscribe(
      value => {
        this.post = value;
      }
    );
  }
}
