import { Component, OnInit } from '@angular/core';
import { ICar } from '@core/interfaces/car.interface';
import { HomeFacade } from '@facade/home/home.facade';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  public isLoading$!: Observable<boolean>;
  public carList$!: Observable<ICar[]>;

  constructor(private _homeFacade: HomeFacade) {}

  ngOnInit(): void {
    this.isLoading$ = this._homeFacade.isLoading$;
    this.carList$ = this._homeFacade.carList$;
    this._homeFacade.onInitHome();
  }
}
