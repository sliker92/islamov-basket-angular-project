import { Component, OnInit } from '@angular/core';
import { Menu } from '../menu.interface';
import { NavService } from '../nav.service';

@Component({
  selector: 'app-nav-list',
  templateUrl: './nav-list.component.html',
  styleUrls: ['./nav-list.component.scss']
})
export class NavListComponent implements OnInit {

  nav: Menu[];

  constructor(private navService: NavService ) { }

  ngOnInit() {
    this.nav = this.navService.navGenerate();
  }
}
