import { Component, OnInit, Output } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { apiService } from 'src/app/services/api.service';
import { EventEmitter } from 'protractor';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css'],
})
export class WeatherComponent implements OnInit {
  weather: number;
  @Output() city: Object;
  locationForm: FormGroup;
  Temperature: Object;
  lat:number=32.045;
  lng: number=34.77;
  zoom: number=15;
  constructor(private api: apiService) { }

  ngOnInit(): void {
this.lat
this.lng
    this.api.getCityKey().subscribe((res) => {
      this.city = res;
      console.log(this.city);
    });
    this.initForm();

  }

  onSubmit() {
    let cityKey: number;
    console.log(this.locationForm);
    this.api.getCityKey(this.locationForm.value.countryname).subscribe((res) => {
       this.lat = res[0]['GeoPosition'].Latitude; 
        this.lng = res[0]['GeoPosition'].Longitude; 
        console.log(this.lat);
        console.log(this.lng);
      cityKey = res[0]['Key'];
      this.api.getCityWeather(cityKey).subscribe(res => {
        for (let index = 0; index < 5; index++) {
          this.Temperature = res[index]['Temperature'];
          console.log(this.Temperature);
       
        
        }
      })

    });

  }

  private initForm() {
    let countryname = "";
    this.locationForm = new FormGroup({
      'countryname': new FormControl(countryname),
    })
  }
}
