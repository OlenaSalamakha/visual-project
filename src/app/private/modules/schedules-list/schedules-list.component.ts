import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuItem } from 'primeng/api';
import { ScheduleService } from 'src/app/shared/services/schedule.service';

@Component({
  selector: 'app-schedules-list',
  templateUrl: './schedules-list.component.html',
})
export class SchedulesListComponent implements OnInit {
  loadedSchedules: any;
  home: MenuItem;
  constructor(public crudSchedule: ScheduleService, private router: Router) { }
  theaders = ['', 'Назва', 'Опис', 'Складність', 'Дата створення'];
  breadcrumbsItems: MenuItem[];
  ngOnInit(): void {
    this.fetchSchedules();
    this.breadcrumbsItems = [
      { label: 'Домашня сторінка', routerLink: '/private/dashboard' },
      { label: 'Представлення розкладу' }
    ];
    this.home = { icon: 'pi pi-home', routerLink: '/' };
  }
  fetchSchedules() {
    this.crudSchedule.fetchSchedulesList().subscribe((eventData) => {
      this.loadedSchedules = eventData;
    });
  }
  navigateTo(id) {
    this.router.navigate(['/private/schedule-view', id]);
  }
}
