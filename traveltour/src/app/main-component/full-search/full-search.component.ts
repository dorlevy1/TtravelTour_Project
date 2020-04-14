import { Component, OnInit, Input } from '@angular/core';
import { WeatherService } from 'src/app/services/weather.service';
import { FullSearchService } from 'src/app/services/full-search.service';
import { apiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-full-search',
  templateUrl: './full-search.component.html',
  styleUrls: ['./full-search.component.css']
})
export class FullSearchComponent implements OnInit {
  @Input() city: Object;
  where: {};
  constructor(private api: apiService) { }

  ngOnInit(): void {
    this.api.getCityWeather().subscribe((res) => {
      this.city = res;
      console.log(this.city);
    });
    this.api.countries().subscribe((res) => {
      this.where = res
      console.log(this.where);

    });


  }

}
