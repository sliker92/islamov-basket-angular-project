import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-articles-preview',
  templateUrl: './articles-preview.component.html',
  styleUrls: ['./articles-preview.component.scss']
})
export class ArticlesPreviewComponent {
  @Input() post;
}
