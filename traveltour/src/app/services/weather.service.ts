import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/internal/Subject';

@Injectable({
  providedIn: 'root',
})

export class WeatherService {
  private dataMap = new Subject<Object>();
  constructor() { }

  sendMessage(data: Object) {
    this.dataMap.next(data);
  }


  getMessage() {
    return this.dataMap.asObservable();
  }
}

