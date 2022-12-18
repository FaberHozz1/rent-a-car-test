import { Component, OnInit } from '@angular/core';
import { APP_CONSTANTS } from '@core/constants/app.constants';

@Component({
  selector: 'layout-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent implements OnInit {
  public authorName: string = APP_CONSTANTS.AUTHOR_NAME;
  public github: string = APP_CONSTANTS.AUTHOR_GITHUB;
  public projectName: string = APP_CONSTANTS.PROJECT_NAME;

  constructor() {}

  ngOnInit(): void {}
}
