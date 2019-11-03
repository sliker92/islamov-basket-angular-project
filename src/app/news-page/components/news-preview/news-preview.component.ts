import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-news-preview',
  templateUrl: './news-preview.component.html',
  styleUrls: ['./news-preview.component.scss']
})

export class NewsPreviewComponent {
  @Input() post;
}
