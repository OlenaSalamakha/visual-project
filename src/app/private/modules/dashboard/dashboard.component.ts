import { AfterViewInit, Component, OnInit } from '@angular/core';
import Swiper, { Navigation, Pagination } from 'swiper';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit, AfterViewInit {

  constructor() { }

  ngOnInit(): void {
  }


  ngAfterViewInit() {
    this.carouselInit();
  }

  carouselInit() {
    Swiper.use([Navigation, Pagination]);
    return new Swiper('.swiper-container', {
      effect: 'coverflow',
      slidesPerView: 3,
      spaceBetween: 30,
      loop: true,
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
    });
  }

}
