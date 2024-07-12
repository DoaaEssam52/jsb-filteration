import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { HttpClient } from '@angular/common/http';

import { Contact } from '../models/contact.interface';
import { ContactUsResponse } from '../models/contact-us-response.interface';

import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ContactService {
  constructor(private _http: HttpClient) {}

  contactUs(contact: Contact): Observable<ContactUsResponse> {
    return this._http.post<ContactUsResponse>(environment.contactUs, contact);
  }
}
