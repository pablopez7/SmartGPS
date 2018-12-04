import { Injectable } from '@angular/core';

@Injectable()

export class MenuService {

  menu: any = [
    {
      titulo: 'Dashboard',
      icono: 'dashboard',
      url: '/dashboard'
    },
    {
      titulo: 'Usuarios',
      icono: 'person',
      url: '/users'
    }
  ];

  constructor() { }
}
