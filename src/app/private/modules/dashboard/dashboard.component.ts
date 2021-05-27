import { AfterViewInit, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import Swiper, { Navigation, Pagination } from 'swiper';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
})
export class DashboardComponent implements OnInit, AfterViewInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  ngAfterViewInit() {
    this.carouselInit();
  }

  navigateTo(path: string) {
    this.router.navigate([path]);
  }

  carouselInit() {
    Swiper.use([Navigation, Pagination]);
    return new Swiper('.swiper-container', {
      effect: 'coverflow',
      slidesPerView: 3,
      spaceBetween: 30,
      loop: true,
      autoplay: {
        delay: 1000,
        disableOnInteraction: false
      }
    });
  }

}
