import { Injectable } from '@angular/core';
import { UserLogin } from '../models/login.model';
import { HttpClient } from '@angular/common/http';
import { urlAPI } from '../config/config';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(
    public _http: HttpClient
  ) { }

  login( userLogin: UserLogin ){
    let url = urlAPI + '/Login';

    return this._http.post( url, userLogin );
  }
}
