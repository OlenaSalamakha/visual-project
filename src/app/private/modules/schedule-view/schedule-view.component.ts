import { AfterViewChecked, Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MenuItem } from 'primeng/api';
import { take } from 'rxjs/operators';
import { ScheduleService } from 'src/app/shared/services/schedule.service';

@Component({
  selector: 'app-schedule-view',
  templateUrl: './schedule-view.component.html',
})
export class ScheduleViewComponent implements OnInit, AfterViewChecked {
  schedule;
  id;
  events: any;
  breadcrumbsItems: MenuItem[];
  home: MenuItem;
  rateValue;
  isDone = false;

  constructor(public crudSchedule: ScheduleService, private activatedroute: ActivatedRoute) {
    this.activatedroute.params.subscribe(data => {
      this.id = data.id;
    })
  }

  ngOnInit(): void {
    this.getSchedule(this.id);
    this.breadcrumbsItems = [
      { label: 'Домашня сторінка', routerLink: '/private/dashboard' },
      { label: 'Представлення розкладу' }
    ];
    this.home = { icon: 'pi pi-home', routerLink: '/' };
  }

  ngAfterViewChecked() {

    if (this.schedule) {
      this.rateValue = this.schedule.complexity;
    }
  }

  getSchedule(id) {
    this.crudSchedule
      .getEventById(id).pipe(take(1)).subscribe(res => {
        this.schedule = res;
      });
  }

  markAsDone(item) {
    item.isDone = this.isDone = !this.isDone
  }
}
