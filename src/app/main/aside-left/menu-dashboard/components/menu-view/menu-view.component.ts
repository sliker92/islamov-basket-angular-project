import { Component, OnInit } from '@angular/core';
import {MenuDashboardService} from "../../services/menu-dashboard.service";
import {Menu} from "../../models/menu.interface";

@Component({
  selector: 'app-menu-view',
  templateUrl: './menu-view.component.html',
  styleUrls: ['./menu-view.component.scss']
})
export class MenuViewComponent implements OnInit {

  nav: Menu[];

  constructor(private menuService: MenuDashboardService ) { }

  ngOnInit() {
    this.nav = this.menuService.menuGenerate()
  }

}
