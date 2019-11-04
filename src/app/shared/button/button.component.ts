import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-button',
  template: `<button type="submit" class="btn">{{label}}</button>`,
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent {
  @Input() label: string;
  @Input() disabled: boolean;
}
