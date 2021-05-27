import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/shared/shared.module';
import { RouterModule, Routes } from '@angular/router';
import { SchedulesListComponent } from './schedules-list.component';

const routes: Routes = [
  {
    path: '',
    component: SchedulesListComponent,
    pathMatch: 'full'
  },
];

@NgModule({
  declarations: [SchedulesListComponent],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(routes)
  ]
})
export class SchedulesListModule { }
