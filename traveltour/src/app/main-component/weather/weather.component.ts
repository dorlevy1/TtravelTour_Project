import { Component, OnInit, Output } from '@angular/core';
import { WeatherService } from '../../services/weather.service';
import { apiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css'],
})
export class WeatherComponent implements OnInit {
  weather: number;
  @Output() city: Object;
  constructor(private api: apiService) { }

  ngOnInit(): void {
    this.api.getCityWeather().subscribe((res) => {
      this.city = res;
      console.log(this.city);
    });
  }

  onSubmit() {

  }
}
