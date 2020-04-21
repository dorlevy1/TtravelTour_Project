import { Injectable } from '@angular/core';
import {
  AngularFirestore,
  AngularFirestoreCollection,
  AngularFirestoreDocument,
} from 'angularfire2/firestore';
import { Observable } from 'rxjs';
import { Contact } from '../models/contact';

@Injectable({
  providedIn: 'root',
})
export class FirebaseService {
  contactCollection: AngularFirestoreCollection<Contact>;
  contact: Observable<Contact>;
  constructor(private firestore: AngularFirestore) {}

  addContact(contact:Contact) {
   
    return new Promise<any>((resolve, reject) =>{
      this.firestore
          .collection("contact")
          .add(contact)
          .then(res => {}, err => reject(err));
  });
    
  }
}
