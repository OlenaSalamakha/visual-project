import { Component, OnInit } from '@angular/core';
import { HomePageCircles } from 'src/app/shared/constants/home-pros.constants';

@Component({
  selector: 'app-welcome-page',
  templateUrl: './welcome-page.component.html',
  styleUrls: ['./welcome-page.component.scss']
})
export class WelcomePageComponent implements OnInit {
  public circles = JSON.parse(JSON.stringify(HomePageCircles));
  constructor() { }

  ngOnInit(): void {
  }

}
