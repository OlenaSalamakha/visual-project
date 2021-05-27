import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { PrivateRoutingModule } from "./private-routing.module";
import { SharedModule } from "../shared/shared.module";
import { WelcomePageModule } from "./modules/welcome-page/welcome-page.module";
import { LoginModule } from "./modules/login/login.module";
import { DashboardModule } from "./modules/dashboard/dashboard.module";
import { SigninModule } from "./modules/signin/signin.module";
import { CreateScheduleModule } from "./modules/create-schedule/create-schedule.module";
import { SchedulesListModule } from "./modules/schedules-list/schedules-list.module";
import { ScheduleViewModule } from "./modules/schedule-view/schedule-view.module";

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    PrivateRoutingModule,
    SharedModule,
    WelcomePageModule,
    LoginModule,
    SigninModule,
    DashboardModule,
    CreateScheduleModule,
    SchedulesListModule,
    ScheduleViewModule
  ],
})
export class PrivateModule { }
