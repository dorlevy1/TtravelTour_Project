import { Component, OnInit, Input, Output, OnDestroy } from '@angular/core';
import { apiService } from '../../services/api.service';
import { WeatherService } from 'src/app/services/weather.service';
import { Datamap } from '../../datamap'
@Component({
  selector: 'app-maps',
  templateUrl: './maps.component.html',
  styleUrls: ['./maps.component.css'],
})
export class MapsComponent implements OnInit {
  data: any[] = [];
  dataMap: Datamap;

  constructor(private apiService: apiService, private wService: WeatherService) {
    this.dataMap = {
      latitude: 32.085300,
      longitude: 34.781769,
      zoom: 15,
    }
    this.wService.getMessage().subscribe(datas => {
      if (datas) {
        this.data.push(datas);
        this.dataMap.latitude = datas['latitude'];
        this.dataMap.longitude = datas['longitude'];
      } else {
        this.data = []
      }
    })

    console.log(this.dataMap);

  }

  ngOnInit(): void {

  }
}


