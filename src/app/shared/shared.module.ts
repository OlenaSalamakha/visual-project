import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccordionModule } from 'primeng/accordion';
import { ButtonModule } from 'primeng/button';
import {CardModule} from 'primeng/card';
import {InputTextModule} from 'primeng/inputtext';
import {PasswordModule} from 'primeng/password';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { LayoutComponent } from './components/layout/layout.component';
import { RouterModule } from '@angular/router';
import { SwiperModule } from 'swiper/angular';
import { ReactiveFormsModule } from '@angular/forms';
import {StepsModule} from 'primeng/steps';
import {FileUploadModule} from 'primeng/fileupload';
import {HttpClientModule} from '@angular/common/http';
import {SliderModule} from 'primeng/slider';
import {RatingModule} from 'primeng/rating';
import {TimelineModule} from 'primeng/timeline';
import {BreadcrumbModule} from 'primeng/breadcrumb';

@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    LayoutComponent,
  ],
  imports: [
    BreadcrumbModule,
    RouterModule,
    CommonModule,
    AccordionModule,
    ButtonModule,
    CardModule,
    InputTextModule,
    PasswordModule,
    SwiperModule,
    ReactiveFormsModule,
    StepsModule,
    FileUploadModule,
    HttpClientModule,
    SliderModule,
    RatingModule,
    TimelineModule
  ],
  exports: [BreadcrumbModule,
    TimelineModule,
    RatingModule,
    SliderModule,
    HttpClientModule,
    ReactiveFormsModule,
    FileUploadModule,
    StepsModule,
    SwiperModule,
    HeaderComponent,
    FooterComponent,
    LayoutComponent,
    AccordionModule,
    ButtonModule,
    CardModule,
    InputTextModule,
    PasswordModule
  ]
})
export class SharedModule { }
