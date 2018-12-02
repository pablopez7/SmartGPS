import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { UserLogin } from '../models/login.model';
import { urlAPI } from '../config/config';

import { map } from 'rxjs/operators';
import { Token } from '@angular/compiler';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  _userLogin: UserLogin;
  usuario: string;
  token: string;

  constructor(public _http: HttpClient) {
    this.loadStorage();
  }

  connectedUser() {
    return ( this.token.length > 5 ) ? true : false;
  }

  loadStorage() {
    if ( localStorage.getItem('token')) {
      this.token = localStorage.getItem('token');
      this.usuario = JSON.parse( localStorage.getItem('usuario') );
    } else {
      this.token = "";
      this.usuario = null;
    }
  }

  login(_userLogin: UserLogin) {
    let url = urlAPI + '/Login';

    return this._http.post(url, _userLogin)
      .pipe(map((resp: any) => {
        localStorage.setItem('token', resp.token);
        localStorage.setItem('usuario', JSON.stringify(resp.usuario));

        return true;
      }
      ));
  }
}
