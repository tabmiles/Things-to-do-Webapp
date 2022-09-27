import { Component } from '@angular/core';
import { PageRoutes, PageType } from './shared/common.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'things-to-do-webapp';
  ngForNoOrder () {return 0;}
  pageRoutes = PageRoutes;
  pages = PageType;
}
