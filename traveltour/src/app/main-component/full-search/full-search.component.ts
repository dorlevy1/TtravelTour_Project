import { Component, OnInit, Input } from '@angular/core';
import { apiService } from 'src/app/services/api.service';
declare var $: any;

@Component({
  selector: 'app-full-search',
  templateUrl: './full-search.component.html',
  styleUrls: ['./full-search.component.css']
})
export class FullSearchComponent implements OnInit {
  where: {};
  defaultCountry: string = "Israel";
  constructor(private api: apiService) { }

  ngOnInit(): void {

    this.api.countries().subscribe((res) => {
      this.where = res
    });


  }

}
