import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class WeatherService {
  constructor(private http: HttpClient) { }

  getWeather(location = 'tel%20aviv') {
    return this.http.get(
      'http://dataservice.accuweather.com/locations/v1/cities/search?apikey=Gi3een1ldFiVGxImtGlGbHabpu1EJsuh&q=' +
      location
    );

  }
}
