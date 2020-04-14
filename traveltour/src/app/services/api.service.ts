import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
    providedIn: 'root',
})
export class apiService {
    constructor(private http: HttpClient) { }



    countries() {
        return this.http.get(
            'https://restcountries.eu/rest/v2/all'
        );
    }


    getCityWeather(location = 'tel%20aviv') {
        return this.http.get(
            'http://dataservice.accuweather.com/locations/v1/cities/search?apikey=Gi3een1ldFiVGxImtGlGbHabpu1EJsuh&q=' +
            location
        );
    }
}
