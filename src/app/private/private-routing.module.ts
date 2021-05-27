import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from '../shared/components/layout/layout.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: 'dashboard',
        loadChildren: () =>
          import('../private/modules/dashboard/dashboard.module').then(
            m => m.DashboardModule
          )
      },
      {
        path: 'create-schedule',
        loadChildren: () =>
          import('../private/modules/create-schedule/create-schedule.module').then(
            m => m.CreateScheduleModule
          )
      },
      {
        path: 'schedules-list',
        loadChildren: () =>
          import('../private/modules/schedules-list/schedules-list.module').then(
            m => m.SchedulesListModule
          )
      },
      {
        path: 'schedule-view/:id',
        loadChildren: () =>
          import('../private/modules/schedule-view/schedule-view.module').then(
            m => m.ScheduleViewModule
          )
      },
    ]
  },
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PrivateRoutingModule { }
