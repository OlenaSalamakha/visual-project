import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  isPasswordHidden  = false;

  constructor(private router: Router) {}

  ngOnInit(): void { }

  navigateTo(path: string) {
    this.router.navigate([path]);
  }
}
