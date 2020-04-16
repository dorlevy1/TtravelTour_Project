import { Component, OnInit } from '@angular/core';
declare var $: any;
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})

export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    $('#home').click(() => {
      $('.line-loader').css('left', '1%')
    })
    $('#flights').click(() => {
      $('.line-loader').css('left', '26%')
    })
    $('#whyus').click(() => {
      $('.line-loader').css('left', '52%')
    })
    $('#contact').click(() => {
      $('.line-loader').css('left', '78%')
    })
  }

}
