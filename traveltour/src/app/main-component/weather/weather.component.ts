import { Component, OnInit, Output } from '@angular/core';
import { WeatherService } from '../../services/weather.service';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css'],
})
export class WeatherComponent implements OnInit {
  weather: number;
  @Output() city: Object;
  constructor(private weatherData: WeatherService) { }

  ngOnInit(): void {
    this.weatherData.getWeather().subscribe((res) => {
      this.city = res;
      console.log(this.city);
    });
  }
}
