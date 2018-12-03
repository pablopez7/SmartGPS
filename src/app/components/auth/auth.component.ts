import { Component, OnInit } from '@angular/core';

declare function init_plugins();

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    init_plugins();
  }

}
