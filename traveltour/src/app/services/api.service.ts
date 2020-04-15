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


    getCityKey(cityKey = 'tel%20aviv') {
        return this.http.get(
            'http://dataservice.accuweather.com/locations/v1/cities/search?apikey=Gi3een1ldFiVGxImtGlGbHabpu1EJsuh&q=' +
            cityKey
        );

    }

    getCityWeather(cityKey: number) {
        return this.http.get('http://dataservice.accuweather.com/currentconditions/v1/' + cityKey + '/historical?apikey=Gi3een1ldFiVGxImtGlGbHabpu1EJsuh&details=true')
    }
}
