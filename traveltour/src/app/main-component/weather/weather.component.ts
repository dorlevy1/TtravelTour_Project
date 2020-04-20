import { Component, OnInit, Output, Input, OnDestroy } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { apiService } from 'src/app/services/api.service';
import { Datamap } from 'src/app/datamap';
import { WeatherService } from 'src/app/services/weather.service';
declare var $: any;
@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css'],
})
export class WeatherComponent implements OnInit {
  weather: number;
  @Input() title: string = "Enter Your next Vacation"
  @Output() city: Object;
  @Output() dataMap: Datamap;
  src = "https://developer.accuweather.com/sites/default/files/0";
  locationForm: FormGroup;
  localDataDay = [];
  constructor(private api: apiService, private wService: WeatherService) {

  }


  ngOnInit(): void {
    this.api.getCityKey().subscribe((res) => {
      this.city = res;
      console.log(this.city);
    });
    this.initForm();

  }

  onSubmit() {
    $('.weatherTitle').css('margin', '10px 50%');
    $('form').css('margin', '-100px 0px');
    $('.height').css('height', '120px');
    this.localDataDay = []
    this.title = "Add another City to look";
    let cityKey: number;
    console.log(this.locationForm);
    this.api.getCityKey(this.locationForm.value.countryname).subscribe((res) => {
      this.dataMap = {
        latitude: res[0]['GeoPosition'].Latitude,
        longitude: res[0]['GeoPosition'].Longitude,
        zoom: 15
      }
      this.wService.sendMessage({ 'latitude': this.dataMap.latitude, 'longitude': this.dataMap.longitude })

      cityKey = res[0]['Key'];
      this.api.getCityWeather(cityKey).subscribe(res => {
        for (let index = 0; index < 5; index++) {


          this.localDataDay.push(res[index]);
          if (res[index].WeatherIcon > 9) {
            this.src = "https://developer.accuweather.com/sites/default/files/";
          }
        }
        console.log(this.localDataDay);

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
