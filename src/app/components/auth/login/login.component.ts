import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, NgForm } from '@angular/forms';
import { UserService } from '../../../services/user.service';
import { UserLogin } from '../../../models/login.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  form: any = FormGroup;

  constructor(
    public _router: Router,
    public _userService: UserService
  ) { }

  ngOnInit() {
    
    /* if (this._userService.token) {
      this._router.navigate(['/dashboard']);
    } else {
      this._router.onSameUrlNavigation;
    } */

    this.form = new FormGroup({
      UserName: new FormControl(null, Validators.required),
      Password: new FormControl(null, Validators.required),
      RememberMe: new FormControl(false)
    });

  }

  onLogin() {


    if (this._userService.token) {

      
      this._router.navigate(['/dashboard']);
      location.reload();
    } else {
      this._router.onSameUrlNavigation;
    }


    let userLogin = new UserLogin(
      this.form.value.UserName,
      this.form.value.Password,
      this.form.value.RememberMe
    );

    this._userService.login(userLogin)
      .subscribe(ConnectedUser => {
        this._router.navigate(['/dashboard']);
      }
    );
  }

}
