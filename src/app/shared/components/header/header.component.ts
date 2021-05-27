import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
})
export class HeaderComponent implements OnInit {
displayLoginBtn;
  constructor(public router: Router) { }

  ngOnInit(): void {

  }
  navigateTo(path: string) {
    this.router.navigate([path]);
  }
}
