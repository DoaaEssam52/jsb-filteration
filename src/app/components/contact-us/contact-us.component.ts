import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';

import { ContactService } from '../../services/contact.service';

import { Contact } from '../../models/contact.interface';

import { validations } from '../../validations/validations';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.scss'],
})
export class ContactUsComponent implements OnInit, OnDestroy {
  showSuccessAlert = false;

  contactForm = new FormGroup({
    name: new FormControl('', [
      Validators.required,
      Validators.minLength(validations.name.minlength),
      Validators.maxLength(validations.name.maxlength),
    ]),
    email: new FormControl('', [Validators.required, Validators.email]),
    phone: new FormControl('', [
      Validators.required,
      Validators.pattern(validations.phone.pattern),
    ]),
  });

  submitSubscription!: Subscription;

  constructor(private _contact: ContactService) {}

  ngOnInit(): void {}

  submit(): void {
    this.contactForm.markAllAsTouched();

    if (this.contactForm.valid) {
      this.submitSubscription = this._contact
        .contactUs(this.contactForm.value as Contact)
        .subscribe({
          next: () => {
            this.showSuccessAlert = true;

            setTimeout(() => {
              this.showSuccessAlert = false;
            }, 5000); // Show the alert for 5 seconds
          },
        });
    }
  }

  ngOnDestroy(): void {
    // Unsubscribe from observables and events
    this.submitSubscription.unsubscribe();
  }
}
