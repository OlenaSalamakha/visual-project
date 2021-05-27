import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MenuItem } from 'primeng/api';
import { ScheduleDay } from 'src/app/shared/models/schedule-day.model';
import { ScheduleService } from 'src/app/shared/services/schedule.service';
import { map } from 'rxjs/operators';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-schedule',
  templateUrl: './create-schedule.component.html',
})
export class CreateScheduleComponent implements OnInit {
  public scheduleForm: FormGroup;
  public eventForm: FormGroup;
  items: MenuItem[];
  activeIndex = 0;
  finalScheduleValues;

  constructor(public crudSchedule: ScheduleService,
    public fb: FormBuilder, private router: Router) { }

  ngOnInit(): void {

    this.createScheduleForm();
    this.createEventForm();
    this.items = [
      { label: 'Крок 1' },
      { label: 'Крок 2' },
      { label: 'Крок 3' }
    ];
  }


  createScheduleForm() {
    this.scheduleForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(2)]],
      description: [''],
      img: [''],
      eventsList: [null],
      complexity: [null],
      cDate: [null],
    })
  }

  createEventForm() {
    this.eventForm = this.fb.group({
      moreEvents: new FormArray([])
    })
  }

  get eventsArray() {
    return this.eventForm.get('moreEvents') as FormArray
  }

  onAddEvent() {
    this.eventsArray.push(
      this.fb.group({
        title: ['', [Validators.required, Validators.minLength(2)]],
        description: ['', Validators.required],
        img: ['', Validators.required],
        eventsList: null,
        duration: ['', Validators.required]
      })
    );
  }

  resetEventForm() {
    this.eventForm.reset();
  }

  resetScheduleForm() {
    this.scheduleForm.reset();
  }

  changeTab(direction: 'next' | 'previous') {
    direction === 'next' ? this.activeIndex++ : this.activeIndex--;
  }

  submitEventsData() {
    this.scheduleForm.value.eventsList = this.eventForm.value.moreEvents;
    this.scheduleForm.value.cDate = Date.now();
   this.finalScheduleValues = this.scheduleForm.value;
   console.log(this.finalScheduleValues);

    this.changeTab('next');
  }

  submitScheduleData() {
    this.crudSchedule.AddSchedule(this.scheduleForm.value);
    this.navigateTo('private/schedules-list');

  }

  myUploader(event) {
    console.log(event);
  }

  navigateTo(path: string) {
    this.router.navigate([path]);
  }
}
