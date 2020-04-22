import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { FirebaseService } from '../services/firebase.service';
import { environment } from 'src/environments/environment';
import { Router } from '@angular/router';
import '../../environments/environment'
import { from } from 'rxjs';
declare let Email: any;

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
})
export class ContactComponent implements OnInit {
  contactForm = new FormGroup({
    firstName: new FormControl(''),
    lastName: new FormControl(''),
    number: new FormControl(''),
    email: new FormControl(''),
    message: new FormControl(''),
  });

  constructor(
    private http: HttpClient,
    private firebaseService: FirebaseService,
    private router: Router
  ) {}

  ngOnInit(): void {}
  sendEmail(): void {
    this.firebaseService.addContact(this.contactForm.value);
    this.router.navigate(['/']);
  }

  sendEmail() {

  }


}
