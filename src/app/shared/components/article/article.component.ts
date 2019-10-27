import {Component, Input} from '@angular/core';
import {Article} from '../../interfaces/article.interface';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.scss']
})

export class ArticleComponent {

  @Input() post: Article;
}

