import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { UserLogin } from '../models/login.model';
import { urlAPI } from '../config/config';

import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(public _http: HttpClient) { }

  login(userLogin: UserLogin) {
    let url = urlAPI + '/Login';

    return this._http.post(url, userLogin)
      .pipe(map((resp: any) => {
        localStorage.setItem('token', resp.token);
        localStorage.setItem('usuario', JSON.stringify(resp.usuario));

        return true;
      }
      ));
  }
}
