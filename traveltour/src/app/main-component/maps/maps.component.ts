import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-maps',
  templateUrl: './maps.component.html',
  styleUrls: ['./maps.component.css'],
})
export class MapsComponent implements OnInit {
  API_KEY: string = 'AIzaSyBn7UzMxUwve7XPsRR8hYuHUtcrBxvVgMs';
  constructor() {}

  ngOnInit(): void {}
}
