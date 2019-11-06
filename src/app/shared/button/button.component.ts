import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-button',
  template: `<a class="btn">{{label}}</a>`,
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent {
  @Input() label: string;
  @Input() disabled: boolean;
}
