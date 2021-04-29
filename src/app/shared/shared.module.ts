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

@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    LayoutComponent,
  ],
  imports: [
    RouterModule,
    CommonModule,
    AccordionModule,
    ButtonModule,
    CardModule,
    InputTextModule,
    PasswordModule,
    SwiperModule
  ],
  exports: [
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
