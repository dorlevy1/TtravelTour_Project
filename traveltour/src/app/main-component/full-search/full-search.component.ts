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
  collage = ['https://www.tripsavvy.com/thmb/b-hvgyReLebGDjPfkV4FS4E9sqI=/2121x1414/filters:fill(auto,1)/the-hungarian-parliament-on-the-danube-river-at-sunset-in-budapest--hungary-945207010-23afbc9012d54bc4bb7c8a1f8c90075b.jpg',
    'https://media.tacdn.com/media/attractions-splice-spp-674x446/09/51/7f/66.jpg',
    'https://lp-cms-production.imgix.net/2019-06/c81f09d36451a030f40f459726f31a96-barcelona.jpeg?fit=crop&q=40&sharp=10&vib=20&auto=format&ixlib=react-8.6.4',
    'https://study-eu.s3.amazonaws.com/uploads/image/path/189/wide_fullhd_amsterdam-2241485_1920.jpg', 'https://img.emg-services.net/HtmlPages/HtmlPage2129/portugal-header.jpg'];
  constructor(private api: apiService) { }

  ngOnInit(): void {
    let count = 0;
    let interval = setInterval(() => {
      console.log(this.collage[count]);
      $('.image').css('background-image',
        'url(' + this.collage[count] + ')');
      if (count != this.collage.length - 1) {
        count++
      } else {
        clearInterval(interval);
      }
    }, 5000);

    this.api.countries().subscribe((res) => {
      this.where = res
    });


  }

}
