import { Component, OnInit, Input } from '@angular/core';
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
    this.api.getCityKey().subscribe((res) => {
      this.city = res;
    });
    this.api.countries().subscribe((res) => {
      this.where = res
    });


  }

}
