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
      $('.line-loader').css('left', '125px')
    } else if (pathName === "/why-us") {
      $('.line-loader').css('left', '250px')

    } else if (pathName === "/contact") {
      $('.line-loader').css('left', '380px')

    } else if (pathName === "/home") {
      $('.line-loader').css('left', '10px')

    }
    $('#home').click(() => {
      $('.line-loader').css('left', '10px')
    })
    $('#flights').click(() => {
      $('.line-loader').css('left', '125px')
    })
    $('#whyus').click(() => {
      $('.line-loader').css('left', '250px')

    })
    $('#contact').click(() => {
      $('.line-loader').css('left', '380px')
    })
  }

}

