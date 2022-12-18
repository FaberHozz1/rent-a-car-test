import { Component, OnInit } from '@angular/core';
import { NAVBAR_ITEMS_DEFAULT } from '@core/constants/navbar.constant';
import { INavbarItems } from '@core/interfaces/navbar.interface';

@Component({
  selector: 'layout-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  public items: INavbarItems[] = NAVBAR_ITEMS_DEFAULT;

  constructor() {}

  ngOnInit(): void {}
}
