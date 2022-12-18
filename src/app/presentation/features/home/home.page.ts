import { Component, OnInit } from '@angular/core';
import { ICar } from '@core/interfaces/car.interface';
import { CARS } from '@data/mocks/cars.mock';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  public items!: ICar[];

  constructor() {}

  ngOnInit(): void {
    setTimeout(() => {
      this.items = CARS;
    }, 1000);
  }
}
