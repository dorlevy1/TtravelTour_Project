import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormControl,
  Validator,
  FormBuilder,
  Validators,
} from '@angular/forms';

import { FirebaseService } from '../services/firebase.service';
import { Contact } from '../models/contact';


@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
})
export class ContactComponent implements OnInit {
  contactForm: FormGroup;
  submitted:boolean = false;
  submitting:boolean = false;

  constructor(
    private fb: FormBuilder,
    private firebaseService: FirebaseService
  ) {}

  ngOnInit(): void {
    this.initForm();
  }

  sendEmail(value: Contact) {
    this.submitting = true;
    setTimeout( ()=>{
      this.firebaseService.addContact(value)
      this.submitting = false;
      this.submitted = true;
    }, 3000);

    
  }

  private initForm() {
    this.contactForm = this.fb.group({
      fullName: ['', Validators.required],
      number: [''],
      email: ['', [Validators.required, Validators.email]],
      message: [''],
    });
  }
}
