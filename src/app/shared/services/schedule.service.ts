import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList, AngularFireObject } from '@angular/fire/database';
import { map } from 'rxjs/operators';
import { ScheduleDay } from '../models/schedule-day.model';

@Injectable({
  providedIn: 'root'
})

export class ScheduleService {
  schedulesRef: AngularFireList<any>;
  scheduleRef: AngularFireObject<any>;
  eventsRef: AngularFireList<any>;

  constructor(private db: AngularFireDatabase, private http: HttpClient) {
    this.schedulesRef = db.list('/schedules');
    this.eventsRef = db.list('/schedules/events')
  }

  // Create Schedule
  AddSchedule(schedule: ScheduleDay) {
    this.schedulesRef.push({
      name: schedule.name,
      description: schedule.description,
      imgUrl: schedule.img,
      eventsList: schedule.eventsList,
      complexity: schedule.complexity,
      cDate: schedule.cDate,

    })
  }

  // Fetch Schedules List
  fetchSchedulesList() {
    return this.http
      .get<{ [key: string]: ScheduleDay }>(
        "https://angular-yeti-300620-default-rtdb.firebaseio.com/schedules.json"
      )
      .pipe(
        map((data) => {
          const postArray: ScheduleDay[] = [];
          for (const key in data) {
            if (data.hasOwnProperty(key)) {
              postArray.push({ ...data[key], id: key });
            }
          }
          return postArray;
        })
      );
  }

  // Fetch Single Schedule Object
  getEventById(id: string) {
    return this.http.get<any>(
      "https://angular-yeti-300620-default-rtdb.firebaseio.com/schedules" + "/" + id + ".json"
    );
  }
}
