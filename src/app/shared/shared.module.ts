import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccordionModule } from 'primeng/accordion';
import { ButtonModule } from 'primeng/button';
import {CardModule} from 'primeng/card';
import {InputTextModule} from 'primeng/inputtext';
import {PasswordModule} from 'primeng/password';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    AccordionModule,
    ButtonModule,
    CardModule,
    InputTextModule,
    PasswordModule,
    AccordionModule
  ],
  exports: [
    AccordionModule,
    ButtonModule,
    CardModule,
    InputTextModule,
    PasswordModule,
    AccordionModule
  ]
})
export class SharedModule { }
