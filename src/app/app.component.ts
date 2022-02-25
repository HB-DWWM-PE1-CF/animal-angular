import { Component } from '@angular/core';
import {GlobalStat, GlobalStatService} from '../angular-module';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'animal-angular';

  data: GlobalStat|null = null;

  constructor(
    private globalStatService: GlobalStatService,
  ) {
    this.globalStatService.getGlobalStat().subscribe((data) => {
      console.log(data);
      this.data = data;
    });
  }
}
