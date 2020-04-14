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
  location: Object;
  constructor(private api: apiService) { }

  ngOnInit(): void {
    this.api.getCityWeather().subscribe((res) => {
      this.city = res;
      console.log(this.city);
    });
    this.initForm();
  }

  onSubmit() {
    this.api.getCityWeather(this.locationForm.value.countryname).subscribe((res) => {
      this.location = res;
      console.log(this.location);
    });


  }

  private initForm() {
    let countryname = "";

    this.locationForm = new FormGroup({
      'countryname': new FormControl(countryname)
    })
  }
}
