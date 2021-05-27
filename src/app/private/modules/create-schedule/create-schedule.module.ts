import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateScheduleComponent } from './create-schedule.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { RouterModule, Routes } from '@angular/router';
const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: CreateScheduleComponent,
  }
];


@NgModule({
  declarations: [CreateScheduleComponent],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(routes)
  ]
})
export class CreateScheduleModule { }
