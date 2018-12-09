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
    },
    {
      titulo: 'Clientes',
      icono: 'person_pin_circle',
      url: '/clients'
    },
    {
      titulo: 'Unidades',
      icono: 'airport_shuttle',
      url: '/vehicles'
    }
  ];

  constructor() { }
}
