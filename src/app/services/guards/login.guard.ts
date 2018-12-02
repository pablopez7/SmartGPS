import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

import { UserService } from '../user.service';


@Injectable()
export class LoginGuard implements CanActivate {

  constructor(
    public _router: Router,
    public _userService: UserService
  ) { }

  canActivate() {
    
    if( this._userService.connectedUser() ) {
      console.log('Paso el Guard');
      return true;
    } else {
      console.log('Bloqueado por Guard');
      this._router.navigate(['/login']);
      return false;
    }
  }
}
