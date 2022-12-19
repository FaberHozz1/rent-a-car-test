import {
  Component,
  EventEmitter,
  OnDestroy,
  OnInit,
  Output,
} from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ISelectOption } from '@core/interfaces/forms.interface';
import { IFilters } from '@core/interfaces/home.interface';
import { debounceTime, Subscription } from 'rxjs';

@Component({
  selector: 'home-filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.scss'],
})
export class FiltersComponent implements OnInit, OnDestroy {
  public sortOptions: ISelectOption[] = [
    {
      text: 'Brand',
      value: 'brand',
    },
    {
      text: 'Model',
      value: 'model',
    },
    {
      text: 'Price',
      value: 'price',
    },
  ];
  public form!: FormGroup;

  @Output() filters: EventEmitter<IFilters>;
  private _filters$!: Subscription;

  constructor(private _formBuilder: FormBuilder) {
    this.filters = new EventEmitter<IFilters>();
  }

  ngOnDestroy(): void {
    if (this._filters$) this._filters$.unsubscribe();
  }

  ngOnInit(): void {
    this.form = this._formBuilder.group({
      term: [''],
      sortBy: [''],
    });
    this._setFiltersOutput();
  }

  private _setFiltersOutput(): void {
    this._filters$ = this.form.valueChanges
      .pipe(debounceTime(500))
      .subscribe((term) => this.filters.emit(term));
  }
}
