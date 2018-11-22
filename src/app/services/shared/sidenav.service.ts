import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SidenavService {

  menu: any = [
    {
      titulo: 'Principal',
      icono: 'menu',
      submenu: [
        { titulo: 'Dashboard', url: '/dashboard' },
        { titulo: 'Users', url: '/Users' }
      ]
    }
  ];

  constructor() { }
}
