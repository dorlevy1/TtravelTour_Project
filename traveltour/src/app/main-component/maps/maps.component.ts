import { Component, OnInit } from '@angular/core';
import { apiService } from '../../services/api.service'; 

@Component({
  selector: 'app-maps',
  templateUrl: './maps.component.html',
  styleUrls: ['./maps.component.css'],
})
export class MapsComponent implements OnInit {
 


  constructor(private apiService: apiService) {}

  ngOnInit(): void {
    // this.apiService.getMaps().subscribe((res) => {
    //   console.log(res);
    // });
  }
}
