import { Component, OnInit } from '@angular/core';
import { MenuService } from '../../../services/menu.service';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css']
})
export class SidenavComponent implements OnInit {

  constructor( public _menuService: MenuService ) { }

  ngOnInit() {
  }

}
