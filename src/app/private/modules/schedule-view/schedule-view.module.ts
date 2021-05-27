import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScheduleViewComponent } from './schedule-view.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: ScheduleViewComponent,
    pathMatch: 'full'
  },
];

@NgModule({
  declarations: [ScheduleViewComponent],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(routes)
  ]
})
export class ScheduleViewModule { }
