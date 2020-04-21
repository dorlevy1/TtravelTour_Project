import { Component, OnInit } from '@angular/core';
// import { MailService } from '@sendgrid/mail';
// import './../../assets/smtp.js';
import '../../environments/environment'
import { from } from 'rxjs';
declare let Email: any;

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  sendEmail() {

  }



}
