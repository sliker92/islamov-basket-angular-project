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
        link: '/news',
        name: 'Новости',
        isActive: false
      },
      {
        link: '/articles',
        name: 'Статьи',
        isActive: false
      },
      {
        link: '/teams',
        name: 'Команды',
        isActive: false
      },
      {
        link: '/rating',
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
