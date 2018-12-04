import { Component, OnInit } from '@angular/core';
import { MenuService } from 'src/app/services/menu.service';

@Component({
  selector: 'app-tabnav',
  templateUrl: './tabnav.component.html',
  styleUrls: ['./tabnav.component.css']
})
export class TabnavComponent implements OnInit {

  constructor(public _menuService: MenuService) { }

  ngOnInit() {
  }

}
