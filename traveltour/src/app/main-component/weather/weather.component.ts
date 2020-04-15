import { Component, OnInit, Output } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { apiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css'],
})
export class WeatherComponent implements OnInit {
  weather: number;
  @Output() city: Object;
  locationForm: FormGroup;
  cityKey: number;
  Temperature: Object;
  constructor(private api: apiService) { }

  ngOnInit(): void {

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
