import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
    providedIn: 'root',
})
export class apiService {

    

    API_KEY: string = '';
    constructor(private http: HttpClient) { }



    countries() {
        return this.http.get(
            'https://restcountries.eu/rest/v2/all'
        );
    }


    getCityKey(cityKey = 'tel%20aviv') {
        return this.http.get(
            'http://dataservice.accuweather.com/locations/v1/cities/search?apikey=oWiqO6qtRA7n3gTVLO1oKDhRkfuFHYI1&q=' +
            cityKey
        );
        // http://dataservice.accuweather.com/locations/v1/cities/search?apikey=oWiqO6qtRA7n3gTVLO1oKDhRkfuFHYI1&q=

        or ReuvenAPI = Gi3een1ldFiVGxImtGlGbHabpu1EJsuh  
        or DorAPI= oWiqO6qtRA7n3gTVLO1oKDhRkfuFHYI1
        this gonna give the currect condition..
        we need to get out the {LocationKey}
        http://dataservice.accuweather.com/currentconditions/v1/{LocationKey}/historical?apikey=oWiqO6qtRA7n3gTVLO1oKDhRkfuFHYI1&details=true
        
        */

    }

    getCityWeather(cityKey: number) {
        return this.http.get('http://dataservice.accuweather.com/currentconditions/v1/' + cityKey + '/historical?apikey=oWiqO6qtRA7n3gTVLO1oKDhRkfuFHYI1&details=true')
    }

    getMaps(){
        return this.http.get("")
    }
}
