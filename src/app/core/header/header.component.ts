import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  constructor(private router: Router) { }

  articleBtnClick() {
    return this.router.navigate(['/articles/create']);
  }

  newsBtnClick() {
    this.router.navigate(['/news/create']);
  }
}
