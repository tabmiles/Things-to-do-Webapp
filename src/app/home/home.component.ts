import { Component, OnInit } from '@angular/core';
import { HomePageDescription, Labels, PageRoutes, PageType } from '../shared/common.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  pageRoutes = PageRoutes;
  pageDescriptions = HomePageDescription;
  label = Labels;
  ngForNoOrder () {return 0;}

  constructor() { }

  ngOnInit(): void {
    console.log('** Home: ngOnInit');
  }

}
