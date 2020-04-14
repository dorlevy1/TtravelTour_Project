import { Component, OnInit, Input } from '@angular/core';
import { WeatherService } from 'src/app/services/weather.service';
import { FullSearchService } from 'src/app/services/full-search.service';

@Component({
  selector: 'app-full-search',
  templateUrl: './full-search.component.html',
  styleUrls: ['./full-search.component.css']
})
export class FullSearchComponent implements OnInit {
  @Input() city: Object;
  where: {};
  constructor(private weatherData: WeatherService, private fullSearch: FullSearchService) { }

  ngOnInit(): void {
    this.weatherData.getWeather().subscribe((res) => {
      this.city = res;
      console.log(this.city);
    });
    this.fullSearch.getToWhere().subscribe((res) => {
      this.where = res
      console.log(this.where);

    });


  }

}
