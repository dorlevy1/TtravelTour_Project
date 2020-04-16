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
    let pathName = window.location.pathname;
    if (pathName === "/flights") {
      $('.line-loader').css('left', '26%')
    } else if (pathName === "/why-us") {
      $('.line-loader').css('left', '52%')

    } else if (pathName === "/contact") {
      $('.line-loader').css('left', '78%')

    } else if (pathName === "/home") {
      $('.line-loader').css('left', '1%')

    }
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

