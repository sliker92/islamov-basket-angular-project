import {Component, Input} from '@angular/core';
import {Article} from '../../interfaces/article.interface';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.scss']
})

export class ArticleComponent {

  @Input() post: Article;

  constructor() {
  }

  articleDescrShow(wrapper: HTMLDivElement, descr: HTMLDivElement) {
    wrapper.style.height = `12%`;
    wrapper.style.transition = '1s';
    descr.style.display = 'block';
  }

  articleDescrHide(wrapper: HTMLDivElement, descr: HTMLDivElement) {
    descr.style.display = 'none';
    wrapper.style.height = `6%`;
    wrapper.style.transition = '.5s';
  }
}

