import { Component, OnInit, Input } from '@angular/core';
import { apiService } from '../../services/api.service'; 

@Component({
  selector: 'app-maps',
  templateUrl: './maps.component.html',
  styleUrls: ['./maps.component.css'],
})
export class MapsComponent implements OnInit {
  @Input() lat :number=32.085300;
  @Input() lng :number=34.781769;
  @Input() zoom:number=15;

  constructor(private apiService: apiService) {}

  ngOnInit(): void {

    
  
    }
  }   

