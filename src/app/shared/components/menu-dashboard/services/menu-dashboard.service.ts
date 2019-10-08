import {Injectable} from '@angular/core';
import {Menu} from "../models/menu.interface";

@Injectable({
  providedIn: 'root'
})
export class MenuDashboardService {
  nav: Menu[] = [];

  constructor() { }

  menuGenerate(): Menu[] {
    return  this.nav = [
      {
        link: '/',
        name: 'Главная',
        isActive: true
      },
      {
        link: '/articles-page',
        name: 'Новости',
        isActive: false
      },
      {
        link: '/news',
        name: 'Статьи',
        isActive: false
      },
      {
        link: '/teams-page',
        name: 'Команды',
        isActive: false
      },
      {
        link: '/rating-page',
        name: 'Рейтинг',
        isActive: false
      },
      {
        link: '/about',
        name: 'О нас',
        isActive: false
      },
    ];
  }
}
