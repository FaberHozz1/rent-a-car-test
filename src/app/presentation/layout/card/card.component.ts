import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'layout-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent implements OnInit {
  @Input() photo!: string;
  @Input() brand!: string;
  @Input() name!: string;
  @Input() price!: string;

  constructor() {}

  ngOnInit(): void {}
}
